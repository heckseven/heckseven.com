---
issue: "001"
date: "2025-06-13"
layout: layouts/zine.html
accent: "#FF6161"
---

```ascii {aria-hidden="true"}
                       .,,uod8B8bou,,.                              
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.                     
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||                    
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||                    
         !.......:!?|||||!!^^""'            ||||                    
         !.........||||                     ||||                    
         !.........||||                     ||||                    
         !.........||||     p l  z          ||||                    
         !.........||||                     ||||                    
         !.........||||                     ||||                    
         !.........||||        h a lp       ||||                    
         `.........||||                    ,||||                    
          .;.......||||               _.-!!|||||                    
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'                     
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....                
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.              
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.            
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.          
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.    
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.  
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^' 
    `........::::::::::::::::;iof688888888888888888888b.     `      
      `......:::::::::;iof688888888888888888888888888888b.          
        `....:::;iof688888888888888888888888888888888899fT!         
          `..::!8888888888888888888888888888888899fT|!^"'           
            `' !!988888888888888888888888899fT|!^"'                 
                `!!8888888888888888899fT|!^"'                       
                  `!988888888899fT|!^"'                             
                    `!9899fT|!^"'                                   
                      `!^"'                                         
```

# electric lazarus

round up your dusty devices.
your derelict drives.
their new lives are yours to give.

Digging through boxes, we surfaced a few old laptops and tablets long forgotten. Getting ready to recycle them, it occured to me they could still be useful.

**Contents:**

* [Surface Pro 2](#surface)
* [2016 Macbook Pro 13](#heckintosh)
* [derelict devices](#derelict)

## Surface Pro 2 -> Samba server {#surface}

it powered up after a bit of charging and seemed to work pretty well. at first, I was thinking it might be a handy little portable computer, but the lid issues changed my mind. maybe a little file sharing server was the way to go. i upgraded Windows as far as it let me, but 10 wasn't going to cut it long-term. after a little searching, Ubuntu seemed like the obvious choice.

i went through (roughly) the steps below to turn it into a little file sharing server. it's now happily humming and sharing our files. hope this helps someone else do the same.

### current issues

- [ ] suspend behavior via closing keyboard super buggy - disabled that behavior for now
- [ ] closing keyboard only locks system once due to modification below

### instructions

0. prep
    * update the current OS and BIOS as much as possible before wiping
    * wipe the computer - securely and slowly if you're into that kind of thing
    * disable secure boot - turn off surface, hold vol up button, turn on, disable secure boot and tpm
1. create install drive (USB)
    * on another computer, download Ubuntu
    * flash image to USB drive via Balena Etcher
    * boot from USB drive - turn off surface, hold vol down, turn on, select drive
2. install [Ubuntu](https://ubuntu.com/download/desktop)
    * boot to install drive - turn off surface, hold vol down, select drive
    * follow install instructions - you do you
    * restart and set up - keyboard and touchpad work, but a little janky
    * `sudo apt update && sudo apt upgrade -y`
    * probably reboot
3. go to [linux-surface](https://github.com/linux-surface/linux-surface) and follow instrunction to install kernel
4. fix autorotate
    * `sudo apt install gnome-shell-extension-manager`
    * open gnome extension manager and install `screen-rotate` by `shyzus`
5. fix for keyboard lid (kinda)
    * `sudo nano /etc/systemd/logind.conf`
    * change lid behavior to never sleep (your call, but I went with lock)
6. set up Samba server
    * find a good tutorial for this. it's funky
7. enable ssh via `openssh` probably
    * handy for remote updates
8. party

## 2016 Macbook Pro 13 {#heckintosh}

this one was pretty far gone. can't even update or make MacOS install media without doing a bit of hacking. decided to try it with Linux. i don't really know what to do with this one yet. anyway, here's where I'm at with it.

### current issues
- [ ] no touch bar (or function keys)
- [ ] super sticky keyboard - someone spilled oranged juice in it
- [ ] does not wake from suspend - implemented workaround
- [ ] fix or replace keyboard
- [ ] replace battery (it's bad)

### instructions

0. prep
    * update the OS and BIOS if you can - it's a pain
    * wipe it
1. create install drive (USB)
    * on another computer, download Ubuntu
    * flash image to USB drive via Balena Etcher
2. install [Ubuntu](https://ubuntu.com/download/desktop)
    * boot to install drive - don't remember the specifics, gonna have to search it up
    * follow install instructions - you do you
    * restart and set up - touch strip doesn't work
    * `sudo apt update && sudo apt upgrade -y`
    * probably reboot
3. fix for keyboard lid (kinda)
    * `sudo nano /etc/systemd/logind.conf`
    * change lid behavior to never sleep (your call, but I went with lock)
4. now what?

## derelict devices {#derelict}

a list of devices i have not brought back yet. ideas are welcome

* Dell XPS 13 - screen busted, has trouble booting
* Dell G7 - not in bad shape, but small primary hard drive and Nvidia GPU
* old apple TV - probably a paperweight, but open to ideas
