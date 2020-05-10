%lex
%%
.                 { return yytext; }
/lex

%%
A:  B 'c'
;
B: 'b' | 'b' 'a'   
;
