Backend learning

HTTP - http ek language hai jismein client aur server bat karte hai ..
HTTP = mein ek baadi problem thi ye data plain text mein jata tha toh koi beech mein se pdh leta tha  jaisse postman postacrd...

***HTTPS = ne slove kiya - encryption se
CLient ----- encrypted -----> Server

Encryption Kaise Hoti Hai — SSL/TLS
1. Server ke paas ek Certificate hota hai (SSL Certificate)
2. Connection shuru hone pe — keys exchange hoti hain
3. Phir saara data encrypted ho jaata hai
4. Sirf client aur server hi decrypt kar sakte hain

*****HTTP VS HTTPS

Feature        HTTP              HTTPS
─────────────────────────────────────────
Security       ❌ No encryption   ✅ Encrypted
URL            http://            https://
Port           80                 443
Certificate    ❌ Nahi chahiye    ✅ SSL cert chahiye(Secure Sockets Layer)
Speed          Thoda fast         Negligible difference
Use case       Local dev          Production always


///HTTP  request ke 3 main part hai....
1. METHOD   — kya karna hai (GET, POST, PUT, DELETE) :: URL + HTTP version
3. HEADERS  — extra info (content type, auth token etc)..
4. BOdy === actual data.

**--** Header **--** Extra information

Header ek key-value pair hota hai jo request/response ke baare mein extra info deta hai.
**---**--***--**
Request Headers — Client server ko batata hai::

Host: localhost:3000              →   kahan ja raha hoon
Content-Type: application/json   →   main JSON bhej raha hoon
Authorization: Bearer token123       meri identity ye hai
Accept: text/html                →   mujhe HTML chahiye response mein
content type - header              ->  Content-Type server ko batata hai ki jo data aa raha hai woh kis format mein hai — JSON hai, HTML hai, ya plain text. 
 ***----**

***---***

Response Header -- Server client ko batat hai'
*--*---***--
Content-Type: text/plain         → main plain text bhej raha hoon
Content-Length: 26               → data kitna bada hai
Set-Cookie: session=abc123       → ye cookie save kar le
  
***----***

**---**BOdy -- actual data
body sirf tab hoti hai jab data bheja ja rha ho
GET request    → ❌ body nahi hoti  (sirf maang raha hai)
POST request   → ✅ body hoti hai   (data bhej raha hai)
PUT request    → ✅ body hoti hai   (update kar raha hai)
DELETE request → ❌ body nahi hoti  (sirf delete karna hai)

***---***Example - login request
POST /login HTTP/1.1
Host: localhost:3000
Content-Type: application/json        ← Header

{                                      ← Body
  "email": "bhai@gmail.com",
  "password": "12345"
}



HTTP Response Ke 3 Main Parts:
1. STATUS CODE  — kya hua (200, 404, 500)
2. HEADERS      — extra info
3. BODY         — actual data jo tu bhej raha hai

Status Code ::::::::::--------
2xx = Success
  200 — OK (sab theek)
  201 — Created (kuch create hua)

3xx = Redirect
  301 — Permanently moved
  302 — Temporarily moved

4xx = Client ki galti
  400 — Bad Request
  401 — Unauthorized (login nahi hai)
  403 — Forbidden (permission nahi)
  404 — Not Found

5xx = Server ki galti
  500 — Internal Server Error

______________________________________________________________________________________________________________________________
DNS - Domain name system  
computer numbers smjhte hain - ip address jai (142.450.193.5)

insan naam yaad rkhte hain - google .com

toh isko solve krne ke liye Dns bana.....
______________________________________________________________________________
DNS kaam kaise krta hai 
______________________________________________________________________________

1. Browser Cache Check
   "Maine pehle ye dekha hai? Mere paas already IP hai?"
   Agar hai → seedha use kar leta hai (fast)
   Agar nahi → next step

2. OS Cache Check  
   Computer ka OS bhi check karta hai apne cache mein

3. Router Check
   Tera WiFi router bhi check karta hai

4. ISP's DNS Resolver
   Tera internet provider (Jio, Airtel) ke paas
   apna DNS server hota hai — wahan check hota hai

5. Root DNS Server
   Agar kahin nahi mila — ye sabse upar wala server
   bolta hai "tu .com wale server pe ja"

6. TLD DNS Server (.com, .org, .in)
   Ye bolta hai "google.com ka record .com
   server ke paas hai, wahan ja"

7. Authoritative DNS Server
   Ye final server hai jiske paas actual
   answer hai — "google.com ka IP ye hai:
   142.250.193.78"

8. IP Address Wapas Aata Hai Browser Tak
   Ab browser us IP pe request bhejta hai

   ____________________________________________________________________
   Visual:
   Tu (Browser)
    ↓ "google.com ka IP chahiye"
Browser Cache  → nahi mila
    ↓
OS Cache       → nahi mila
    ↓
Router Cache   → nahi mila
    ↓
ISP DNS Resolver → nahi mila
    ↓
Root Server    → ".com server pe ja"
    ↓
TLD Server     → "google.com ke authoritative server pe ja"
    ↓
Authoritative Server → "IP hai: 142.250.193.78"
    ↓
Wapas Tere Browser Tak Pohonchta Hai
    ↓
Ab Browser Us IP Pe Connect Karta Hai
___________________________________________________________________________
DNS Record - DNS sirf ip addreess nhi deta - alag types ke records hotehain
___________________________________________________________________________
A Record       → Domain ko IPv4 address se jodta hai
                  google.com → 142.250.193.78

AAAA Record    → Domain ko IPv6 address se jodta hai

CNAME Record   → Ek domain ko doosre domain ka alias banata hai
                  www.google.com → google.com

MX Record      → Email server batata hai
                  (kahan email bhejna hai domain ke liye)

TXT Record     → Extra text info (verification, security)

NS Record      → Konsa nameserver authoritative hai+
___________________________________________________________________________
DNS Caching - Speed ka Raaz
DNS records ttl(Time to Live) ke sath aate hain...

Mablab - ek bar IP mil gaya. 1 hour tak dobara dns lookup nhi hoga - cache se hi mile jayega isliye baar baar same site khol toh fast load hoti hai...
________________________________________________________________________________________-
interview question??????????
Q1-DNS kya hai aur kyun zaroori hai?
dns ek domain name system hai . internet humesa number yaad rkhta hai na ki  naam .. toh solve krne ke liye heee dns bana tha ...
_______________________________________________________________________________________________
Q2- DNS Lookup process explain karo step by step?                                              |
 Visual:                                                                                       |
   Tu (Browser)
    ↓ "google.com ka IP chahiye"
Browser Cache  → nahi mila
    ↓
OS Cache       → nahi mila
    ↓
Router Cache   → nahi mila
    ↓
ISP DNS Resolver → nahi mila
    ↓
Root Server    → ".com server pe ja"
    ↓
TLD Server     → "google.com ke authoritative server pe ja"
    ↓
Authoritative Server → "IP hai: 142.250.193.78"
    ↓
Wapas Tere Browser Tak Pohonchta Hai
    ↓
Ab Browser Us IP Pe Connect Karta Hai
___________________________________________________________________________________________________

Q3 - A record Aur Cname record mein kya fark hai ?
domain ko ipv4 se jodta hai
______________________________________________________________________________________

