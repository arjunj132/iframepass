# iFramePass

Bypass X-Frame-Options headers on a iFrame. Insipred by niutech's X-Frame-Bypass, but this uses a different proxy that is always on and makes the code simpler and smaller.

This is a iFrame loading Google without the iFramePass:

<img width="506" alt="without" src="https://user-images.githubusercontent.com/68869672/186943102-1e83824c-0978-4e81-92ed-3c64c04a8557.png">

Console: 
```
Refused to display 'https://www.google.com/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
```

This is a iFrame loading Google with the iFramePass:

<img width="504" alt="with" src="https://user-images.githubusercontent.com/68869672/186943157-99f673f4-6f9e-4f3f-ade1-e966012f330e.png">

Console:

```
... (bunch of google messages)

iFramePass:
Applying iFramePass to https://google.com/

... (bunch of google messages)

iFramePass:
loaded url

... (bunch of google messages)
```

See the difference? See `example.html` for more info.

Note that this may not work with every single webpage and going to another webpage from the iFrame removes the pass due to cross origin issues.

Also note that try not to use this product if you can due to problems that can occur.
