FizzBuzz Kata
==================

"Fizz Buzz" to gra towarzyska, w której gracze liczą po kolei: 1, 2...

Ale... gdy liczba jest podzielna przez 3, zamiast tej liczby należy powiedzieć "Fizz".
Natomiast gdy liczba jest podzielna przez 5 trzeba powiedzieć "Buzz".
Gdy liczba jest podzielna zarówno przez 3 jak i przez 5, trzeba powiedzieć "FizzBuzz".

Utwórz program, który wypisze ściągawkę dla graczy. Dzięki niej będą znać kolejne odpowiedzi
 bez potrzeby sprawdzania podzielności. Ściągawka będzie w postaci: 1,2,Fizz,4,Buzz...
 (i tak aż do setnego elementu).

Zadanie składa się z dwóch części:

1. Utwórz funkcję, która przyjmuje liczbę naturalną większą od 0 i zwraca dla niej odpowiedź
   w grze Fizz Buzz. Np. dla liczby `3` powinna zwrócić `Fizz`.

2. Utwórz funkcję, który wypisuje odpowiedzi dla liczb od 1 do 100 oddzielone przecinkami.
   Np. dla liczby `3` powinna zwrócić `1,2,Fizz` (bez przecinka na końcu).

#### Dodatkowe opcjonalne wymagania:

1. Fizz odpowiadamy również wtedy, gdy liczba zawiera cyfrę 3. Np. `Fizz` dla `31`. Ale nadal `FizzBuzz` dla `30`,
   ponieważ jest także podzielne przez 5.
    
2. Podobnie dla Buzz - także, gdy liczba zawiera cyfrę 5.

3. Od teraz Fizz i Buzz mówimy dla podzielności przez/zawierania cyfr 7 i 9 (zamiast 3 i 5).
   Nie poprzestań na podmianie liczb w kodzie, zamiast tego saparmetryzuj funkcję fizzbuzzującą.
