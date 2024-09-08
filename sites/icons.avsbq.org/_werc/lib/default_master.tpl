% if(! ~ $#handlers_bar_left 0) {
<nav id="side-bar">
%   for(h in $handlers_bar_left) {
<div>
%       run_handler $$h
</div>
%   }
</nav>
% }
% run_handlers $handlers_body_head
% run_handler $handler_body_main
