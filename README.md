express-ssl-demo
================

A demo project illustrating how to set up SSL with express. It is of course
entirely possible to not do this but instead have a proxy handling SSL
handshake, but you can if you want to.

I have stripped all things not needed to show how it's done. Basically you just
import `https` instead of `http` and pass an option hash to the `createServer`
function and presto, it's done (in theory).