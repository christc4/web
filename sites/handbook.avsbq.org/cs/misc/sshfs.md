# SSHFS

From local machine 

`sudo sshfs root@avsbq.org:/var/www/werc/sites/ /mnt/avsbq.org`

## Common error

If you recently reinstalled server OS and try again you might get an error and even if you've made a previous successful ssh connection...

`Connection reset by peer`

First, 

`Subsystem sftp /usr/lib/openssh/sftp-server`

Add this line to `/mnt/ssh/sshd_config`

`sudo sshfs root@avsbq.org:/var/www/werc/sites/ /mnt/avsbq.org -o reconnect -o sshfs_debug -o idmap=user -o allow_other -o ServerAliveInterval=15 -o ssh_command="ssh -v"`

    SSHFS version 3.7.3
    executing <ssh> <-x> <-a> <-oClearAllForwardings=yes> <-2> <root@avsbq.org> <-s> <sftp>
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
    Someone could be eavesdropping on you right now (man-in-the-middle attack)!
    It is also possible that a host key has just been changed.
    The fingerprint for the ED25519 key sent by the remote host is
    SHA256:m+J3nZg19/Yws32ATzexhcTs7etFqDEVXh8Eddv7Wd8.
    Please contact your system administrator.
    Add correct host key in /root/.ssh/known_hosts to get rid of this message.
    Offending ECDSA key in /root/.ssh/known_hosts:4
    Host key for avsbq.org has changed and you have requested strict checking.
    Host key verification failed.
    read: Connection reset by peer


Remove offending key

`sudo ssh-keygen -R avsbq.org`

reattemppt connection

If it says `remote host has disconnecteed`

try restart sshd

on OpenBSD it's `rcctl restart sshd`
