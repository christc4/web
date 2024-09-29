#!/bin/rc
cd ..
# plan9port=$PLAN9
# path=($plan9port/bin . ./bin /bin /usr/bin)
# FUNCTIONS
fn awk_buffer { awk '{ buf = buf $0"\n"; if (length(buf) > 1400) { printf "%s", buf; buf = "" } } END { printf "%s", buf }' }
fn cork_exec {
	site=$SERVER_NAME
	base_url=http://$site:$SERVER_PORT
	sitedir=$sitesdir/$site
	master_template=`{get_lib_file default_master.tpl}
	req_path=`{echo -n $REQUEST_URI | sed 's/\?.*//; s!//+!/!g; s/%5[Ff]/_/g; s/\.\.*/./g; 1q'}
	req_url=$base_url^$req_path
	local_path=$sitedir$req_path
	local_file=''
	ifs='/' { args=`{echo -n $req_path} }

	if (~ $REQUEST_METHOD POST) {
		load_post_args
	}

	if (~ $req_path */index) {
		perm_redirect `{echo -n $req_path | sed 's,/index$,/,'}
	}

	if (~ $local_path */) {
		if (test -d $local_path) {
			local_path=$local_path^'index'
		}
	}
	cd $sitedir
	req_paths_list='/' 
	conf_wd='/' # Used in config files to know where we are in the document tree.
	for (i in $args) {
		conf_wd=$conf_wd^$i
		req_paths_list=($req_paths_list $conf_wd)
		if (test -d $i) {
			conf_wd=$conf_wd'/'
			cd $i
		}
	}
	cd $cork_root
	setup_handlers
#	if (~ $REQUEST_METHOD HEAD) { exit }
	template $master_template # | awk_buffer
}

fn dprint { echo $* >[1=2] }

fn echo {if(! ~ $1 -n || ! ~ $2 '') /bin/echo $*}

fn escape_html { sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g' $* }

fn fltr_cache {
    a=()
    tmpf=()
    proc=$1
    shift

    if(~ $#* 0) {
        tmpf=/tmp/fmttmp.$pid
        f=$tmpf
        score=`{{tee $tmpf || exit 1} | sha1sum}
    }
    if not {
        f=$1
        if(~ $f */) {
            score=`{du -an $f | sha1sum || exit 1} # XXX using -n(bytes) instead of -t(lastmod) because sitemap proc touches files in tree.
            a=$f
            f=/dev/null
        }
        if not {
            score=`{sha1sum $f || exit 1}
            score=$score(1)
        }
    }
    cachedir=/tmp/fltr_cache/$score
    mkdir -p $cachedir >[2]/dev/null

    if(test -s $cachedir/$proc)
        cat $cachedir/$proc
    if not
        if($proc $a < $f | tee $cachedir/$pid)
            mv $cachedir/$pid $cachedir/$proc

    rm $tmpf $cachedir/$pid >[2]/dev/null &
}

fn get_lib_file { echo -n bin/default_master.tpl }

fn ll_add { _l=$1^_^$#$1; $_l=$*(2-); $1=( $$1 $_l ) }

fn md_handler { $fm $1 }

fn nav_tree {
echo -n '<style>nav li ul{padding-left:.5em}body{display:flex;flex-wrap:wrap;margin:0 20%}article{flex:1}nav{min-width:12em}ul{list-style:none}nav ul{border-bottom:1px dashed;}img{width:150}pre{padding-left:4em}</style><nav><ul>'
ls -F $sitedir/./$req_paths_list >[2]/dev/null \
| {
sed $dirfilter; s!^'$sitedir'!!; '$dirclean
# sed $dirfilter'/\.(md|\/)$/!d; s!^'$sitedir'!!; '$dirclean
# sed $dirfilter'/\/[^\/]*(\.(md)|\/)$/!d; s!^'$sitedir'!!; '$dirclean
# sed $dirfilter'/\/[^_.\/][^\/]*(\.(md)|\/)$/!d; s!^'$sitedir'!!; '$dirclean
} | sort -u | awk -F/ '
function p(x, y, s) { for(i=0; i < x-y; i+=1) printf s }
BEGIN { lNF=2; }
{
d = ""
if(match($0, "/$"))
d = "/"
sub("/$", "")
p(NF, lNF, "<li><ul>")
p(lNF, NF, "</ul>")
lNF = NF
fp = $NF d
path = $0 d
gsub(/[\-_]/, " ", fp)
pa = path
gsub(/[^\/]$/, "&/", pa)
if(index(ENVIRON["req_path"] "/", pa) == 1)
printf "<li><a href=" path ">> <b>"fp"</b></a>"
else
printf "<li><a href=" path ">"fp"</a>"
}
END { p(lNF, 2, "</ul>"); printf "</ul></nav>" }'
}
fn run_handlers { for(h in $*) run_handler $$h }
fn run_handler { $*(1) $*(2-) }
fn setup_handlers { if (test -f $local_path.md) { local_file=$local_path.md; handler_body_main=(md_handler $local_file) }} 
fn template { awk -f bin/template.awk $* | rc $rcargs }
fm=(fltr_cache m2h.awk)
difs=$ifs 
dirfilter='s,/+\./+,/,g; s,^\./,,; /\/index\.(md)$/d;'
# dirfilter='s,/+\./+,/,g; s,^\./,,; /\/[._][^\/]/d; /\/index\.(md)$/d;'
# dirfilter='s/\*$//; s,/+\./+,/,g; s,^\./,,; /\/[._][^\/]/d; /\/index\.(md)$/d;'
dirclean=' s/\.(md)$//; '
path=(. /bin ./bin)
ll_add handlers_bar_left nav_tree
cork_root=`{pwd}
sitesdir=sites
cork_exec
