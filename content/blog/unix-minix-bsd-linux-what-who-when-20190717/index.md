---
title: 'Unix, BSD, Minix, Linux - What, Who and When'
date: '2019-07-17'
author: 'Amrit Pandey'
author_website: 'https://amritpandey.dev'
---

I have been reading the history of Linux and Free operating systems since I started using debian in 2014. As a beginner you might be unaware about the story of UNIX and Linux. If you are like me and love linux based free operating systems, you should read this article about the interesting history that took place from 1973 to 1994 in the community that made free operating systems possible.

**Before you read**: This article is a super compressed version of the timeline from 1973 to 1994. I may have missed names of many co-creators and contributors who were part of this timeline, this is not by ignorance but my lack of knowledge, please mention important personality in comments if you think they had a crucial role in the development and promotion of free operating systems.

## Creation of UNIX

![x_86 port of Unix version 7](https://cdn.hashnode.com/res/hashnode/image/upload/v1563361035517/8NuKPIYg2.png)

The original version of [UNIX](https://en.wikipedia.org/wiki/Unix) was written in [Assembly Language](https://en.wikipedia.org/wiki/Assembly_language) but in 1973 it was re-written in [C Programming language](https://en.wikipedia.org/wiki/C_(programming_language) which lays the foundation of UNIX-like operating systems we use today(GNU, MacOS, Ubuntu etc.). The UNIX operating system had a very simple design, working style and was written in C which made it very popular in hacking community and computing business. Over a period of 25 years or so, programmers contributed to the UNIX family to make what it is now. 

Today, UNIX is not an Operating System but a specification. The original version which was created and sold by [AT&T Bell Labs](https://en.wikipedia.org/wiki/Bell_labs) has expired. It could have been the most used OS of this era but glip decisions taken by Bell Labs's legal department, prevented its organic growth and promotion.

UNIX was a very expensive product. According to [Jon "Maddog" Hall](https://en.wikipedia.org/wiki/Jon_Hall_(programmer), who was an early contributor in the development of [Linux](https://en.wikipedia.org/wiki/Linux), a single copy of UNIX along with its source code was sold for $150,000. Such high price back then was normal for an OS software in commercial space, but it also meant that individuals could not afford to see or use its source code.

UNIX was a work of art, it invented two new features in the scope of operating systems namely [time-sharing](https://en.wikipedia.org/wiki/Time-sharing)(multi tasking) and piping. These two features alone changed the way programmers used to write code, for example, with piping it became easy to reuse previously written programs instead of writing them from scratch in new routine.

## BSD: Berkeley Software Destribution

![Screenshot of 4.4BSDLite](https://upload.wikimedia.org/wikipedia/commons/f/f0/4.3_BSD_UWisc_VAX_Emulation_Login.png)

In 1974, Berkley started working on their operating system called [BSD](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) based on UNIX's source code. It was an academic project at Berkeley University. Ken Thompson, who is the co-creator of UNIX also helped in the release of version 1 of BSD in 1978. Initially BSD focused on creating improved version of UNIX and was meant as an add-on to Unix-v6. 

Seeing the success of BSD in academic field, the software was then distributed under the brand name of BSDi or BSD Inc. to distribute copies to people outside universities. Untill version 4.3, BSD used AT&T's UNIX source code which was subjected to properitary licenses. BSDi changed the terms in their license and released a new version named **Networking Release 1 or Net/1** in 1989 which had [BSD license](https://en.wikipedia.org/wiki/BSD_licenses). But even though this version had BSD license, it still used few components of UNIX propreitary source code. 

BSD Developer [Keith Bostic](https://en.wikipedia.org/wiki/Keith_Bostic) worked on releasing a non-AT&T version of BSD which had no properitary code and after 18 months of work, **Net/2** was released in June 1991 which set the stage for freely distributable BSD.

After the release of BSD/386 which was based on the port of Net/2, BSDi soon found itself in legal troubles with AT&T. [BSDi vs AT&T](https://en.wikipedia.org/wiki/UNIX_System_Laboratories,_Inc._v._Berkeley_Software_Design,_Inc.) lawsuit took 2 years and hindered the development. The lawsuit was settled in 1994 largely in Berkely's favour, of 18,000 files in the software only 70 were modified. 

BSD released its final version 4.4BSD-Lite in 1995 and was then dissolved. The final versions of BSD led to the creation of various releated Operating systems like FreeBSD, OpenBSD, NetBSD etc. **Apple's MacOS and iOS are also based on 4.4BSD and FreeBSD**.

## Minix

![Screenshot of Minix](https://upload.wikimedia.org/wikipedia/commons/b/bf/Minix3.1.8.PNG)

[John Lions](https://en.wikipedia.org/wiki/John_Lions) wrote a book to explain UNIX source code. "John Lions' Commentary on UNIX v6" became very popular in universities, and helped students and enthusiasts learn about operating systems. But then AT&T released version 7 UNIX with a clause "You shall not teach". This made impossible for professors and teachers to teach students about UNIX and also document its source code.

In 1987, [Andrew S. Tanenbaum](https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum) wrote a clone of UNIX and called it MINIX(MINi-unIX). It was a fun learning project for Tanenbaum, and also a medium for students to learn operating systems. He also wrote a companion book that explained the source code of [MINIX](https://en.wikipedia.org/wiki/MINIX). 

MINIX was available to students and professors for free in academic space only. It was not allowed to be used as a commercial software with any kind of liability. Today MINIX is available both for production and educational purposes.

## Linux

![X-Windows desktop running linux](https://www.maketecheasier.com/assets/uploads/2016/11/wayland-xorg-xsession.jpg)

Linus Torvalds joined MINIX newsgroup *comp.os.minix* and started discussing about various [issues](https://groups.google.com/forum/#!topic/comp.os.minix/2Tm_OV64JWo) he was having while running MINIX on his [x_86](https://en.wikipedia.org/wiki/X86) computer. To counter the issues posed by MINIX on his computer hardware, he began working on a personal operating system project that he could run on his machine. The development of this project was done on MINIX using the GNU C Compiler. 

Torvalds posted this on *comp.os.minix* on 25 August, 1991:

>Hello everybody out there using minix -
I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready. I'd like any feedback on things people like/dislike in minix, as my OS resembles it somewhat (same physical layout of the file-system (due to practical reasons) among other things).
I've currently ported bash(1.08) and gcc(1.40), and things seem to work. This implies that I'll get something practical within a few months, and I'd like to know what features most people would want. Any suggestions are welcome, but I won't promise I'll implement them :-) 
PS. Yes - it's free of any minix code, and it has a multi-threaded fs. It is NOT portable (uses 386 task switching etc), and it probably never will support anything other than AT-harddisks, as that's all I have :-(
— Linus Torvalds

Even though Torvalds' ambition was to create an operating system, he ended up creating a kernel software later known by the name [LINUX](https://en.wikipedia.org/wiki/Linux), which then became an important component to almost all the incomplete operating systems at that time.

GNU dropped the development of their [kernel](https://en.wikipedia.org/wiki/GNU_Hurd) and adopted Linux to create first working [free](https://www.gnu.org/philosophy/free-sw.html) operating system and called it "GNU/Linux". Of all the Debian releases, "Debian Linux release" and later "Debian GNU/Linux" became the most popular. Since Linux was free it immediately became default kernel component in all the free operating systems.

## Tanenbaum-Torvalds debate

![Torvalds and Tanenbaum together](https://i0.wp.com/lwn.net/images/conf/lca2007/lt-ast.jpg)

As Linux started gaining attention in the community and academic space, members from MINIX and as well as Linux started moderate debate over the kernel design. Big contributors from both the projects got involved and the arguments became more and more detailed and sophesticated.

On January 1992, Tanenbaum sent a post on *comp.os.minix* titled "Linux is Obsolete" showering his criticism on monolithic design of Linux kernel. A day later Torvalds reponded to the post by stating *he finds the microkernel(which minix have) design to be superior "from a theoretical and aesthetical" point of view*.

The debate and passive feud between the kernel communities continued very long. The subject was revisited in 2006 when Tanenbaum wrote an article titled [Can We Make Operating Systems Reliable and Secure?](https://www.cs.vu.nl/~ast/Publications/Papers/computer-2006a.pdf). 

## Epilogue

After inclusion of GPL license, adoption of linux happened at a grand scale. Today, Linux is used everywhere from NASA's Mars Rover to Tesla's auto pilot system. Linux is backed by major commercial companies like Micrsoft, IBM and VMWare through [Linux Foundation](https://www.linuxfoundation.org/).

## Conclusion

The linux based OS like debian, arch, freebsd, suse etc. that we love today was not made possible just from the contributions of Linux and GNU community. It took genius of Ken Thompson and Dennis Ritchie to come up with UNIX, hacking culture of BSD to spead and improve it and MINIX to lay foundational development. 

## Sources

- [VCF East 2019 -- Brian Kernighan interviews Ken Thompson](https://www.youtube.com/watch?v=EY6q5dv_B-o) (Video)
- [Jon "maddog" Hall talks Unix and Linux history ](https://www.youtube.com/watch?v=EZMA3Ge144U) (Video)
- [Andrew S. Tanenbaum: The Impact of MINIX ](https://www.youtube.com/watch?v=86_BkFsb4eI) (Video)
- [History of Linux](https://en.wikipedia.org/wiki/History_of_Linux)
- [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)
  

*Follow DevDiary on [twitter](https://twitter.com/DiaryOfDev) for programming related news and notification.*