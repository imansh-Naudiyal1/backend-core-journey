Browser kaise kaam krta hai...
______________________________________________________________________________________
jab tu enter dabata hai url ke baad _ 5 major steps hote hain........
________________________________________________________________________________________
1. DNS Lookup        → URL ka IP address pata karo
2. TCP Connection     → Server se connection banao (3-way handshake)
3. TLS Handshake      → Agar HTTPS hai toh encryption setup
4. HTTP Request       → Server ko request bhejooo
5. Response & Render  → HTML/CSS/JS aaya, browser render karta hai
_________________________________________________________________________________________
Rendering engine ka kaam....
browser ke andar ek rendering engine hota hai ..................
_____________________________________________________________________________________________
1. HTML Parse → DOM Tree banta hai
2. CSS Parse  → CSSOM Tree banta hai
3. DOM + CSSOM = Render Tree
4. Layout     → har element ki position calculate hoti hai
5. Paint      → screen pe actual pixels draw hote hain
______________________________________________________________________

HTML  ──→  DOM Tree   ─┐
                        ├──→  Render Tree  ──→  Layout  ──→  Paint
CSS   ──→  CSSOM Tree ─┘
______________________________________________________________________________________________
Important: JS parsing ko block karta hai by default — isiliye defer aur async attributes use hote hain scripts mein.
_______________________________________________________________________________________________
Q1 -- jab mein url enter krta hoon toh dns ip addreess dhonta hai ... jaise hee mila vo request bhejta hai sever ko then server and client 3 way tcp handshake krte hain....and tls handshake --- 
agar https hai toh encryption setup ... then server response krta hai.. then html ,css, js aaya ,, 
render krta hai screen p...
________________________________________________________________________________________________
CLI-- (command line interface):-
pwd              # Kahan hoon abhi (Print Working Directory)
ls                # Files/folders list karo (Mac/Linux)
dir               # Same kaam Windows mein

cd folder-name    # Folder ke andar jao
cd ..             # Ek folder peeche jao
cd ~              # Home directory pe jao

mkdir name        # Naya folder banao
touch file.js      # Naya file banao (Mac/Linux)

rm file.js         # File delete karo
rm -rf folder       # Folder delete karo (force, recursive)

cp source dest      # Copy karo
mv source dest       # Move ya rename karo

cat file.js          # File ka content dikhao
clear                 # Terminal clean karo
______________________________________________________________________________________________
OS Basics (process,thread,memory)---
jab tu program run krta hai (node app.js)- OS uske liye ek process banata hai...

har process ke pass apna:
Memory space 
code
data
resources(files,network connection)
_____________________________________________________________________________________________
thread kya hai??
ek process ke andar multiple thread ho skte hai.....
Process (Node.js app)
   ├── Thread 1 — main code execute kar raha
   ├── Thread 2 — background task
   └── Thread 3 — kuch aur kaam
   thread:- process ke andar ek chotta execution unit:-
  mportant: Node.js single-threaded hai by default (main thread), lekin background mein libuv kuch kaam multiple threads pe karta hai (file I/O jaisa). 
______________________________________________________________________________________
Memory — RAM Kaise Use Hoti Hai

Stack Memory:
- Function calls yahan store hote hain
- Fast, lekin limited size
- Jab function khatam → memory clear

Heap Memory:
- Objects, arrays yahan store hote hain  
- Bada size, lekin thoda slow
- Garbage Collector isko clean karta hai
______________________________________________________________________________________________
Q1-Process aur Thread mein kya fark hai?
process :- jab tu koi program run krta hai _ os uske liye ek process banata hai.
thread -ek process ke andar multiple threads ho skte hai
____________________________________________________________________----
Real-Life ExampleMS Word ko open karna ek Process hai.Uske andar jo aap type kar rahe hain, sath mein spelling check ho rahi hai, aur file auto-save ho rahi hai—yeh sab alag-alag Threads hain.
________________________________________________________________________________________
Q2:-  Node.js single thread kyu hai?
Node.js ko single-threaded Isliye banaya gaya taaki yeh kam memory me zyada concurrent users (traffic) ko handle kar sake.
________________________________________________________________________________________


Node.js ek single-threaded runtime hai jo asynchronous aur non-blocking I/O model par kaam karta hai, jise asaan shabdon me "Single Thread, Multi-Tasking" server kaha jata hai. Iska matlab hai ki aapka likha hua JavaScript code sirf ek hi main thread (Event Loop) par chalta hai, lekin jab bhi koi heavy ya slow kaam aata hai (jaise database query ya file read karna), toh Node.js use khud karne ke bajaye background me Operating System aur Libuv library ke worker threads ko de deta hai; isse main thread kabhi block nahi hota aur server ek hi samay par bina crash huye hazaaron users ke traffic ko bohot kam memory me handle kar leta hai.

____________________________________________________________________________________________
hosting:- tera code tere laptop p chlt hai ... localhost pe.lekin duniya use nhi kr skti hai
Hosting ka mtlb  tera code ek aise sever p daalna jo 24/7 internet se connected rhe 

Tera Laptop  →  Hosting Provider Ka Server  →  Duniya Access Kar Sakti Hai
____________________________________________________________________________________________