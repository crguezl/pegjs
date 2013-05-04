/*
Begin ← '(*'
End   ← '*)'
C     ← Begin N* End
N     ← C / (!Begin !End Z)
Z     ← any single character
*/

P     =   prog:N+                          { return prog; }
N     =   C 
        / (!Begin !End char:ANY)           { return char;}
C     = Begin chars:N* End                 { return chars.join(''); }
Begin = '(*'
End   = '*)'
ANY   =   'z'    /* any character */       { return 'z';  }
        / char:[^z]                        { return char; }
