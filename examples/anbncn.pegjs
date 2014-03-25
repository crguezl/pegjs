/*
  The following parsing expression grammar describes the classic 
  non-context-free language : 
               { a^nb^nc^n / n >= 1 }
*/

S = &(A 'c') 'a'+ B:B !('c'/[^c]) { return B; }
A = 'a' A:A? 'b' { if (A) { return A+1; } else return 1; }
B = 'b' B:B? 'c' { if (B) { return B+1; } else return 1; }
