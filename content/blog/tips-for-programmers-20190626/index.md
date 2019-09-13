---
title: 'Some invaluable tips for programmers'
date: '2019-06-26'
author: 'Amrit Pandey'
author_website: 'https://amritpandey.dev'
---
Last week I watched some videos and read article from experts in computer science academia and software industry. I have skimmed some great programming wisdom and aggregated them in this article. 

### Program not Code

On a very basic level the terms [coding](https://en.wikipedia.org/wiki/Coding) and [programming](https://en.wikipedia.org/wiki/Computer_programming) can be used interchangeably. But lets just add some philosophy behind their meanings. 

When you program, your job is to craftily solve problems, handle errors gracefully, use good component names and document the code. Programming also require programmers to find ways around the limitations of a language or ecosystem and improve them. 

When you code, you are simply making things work and getting constantly annoyed by the shortcomings of the language constructs. Coding is a job of applying fixes and patches and disregarding the complexity.

### Big Interfaces make weaker Abstractions

A class/object with too many methods make program bloated. Multiple methods for variations of same job is unnecessary. For example, when you create a class that converts a given [decimal](https://en.wikipedia.org/wiki/Decimal) number to [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal), [binary](https://en.wikipedia.org/wiki/Binary_number), [octal](https://en.wikipedia.org/wiki/Octal) etc. you can write methods for every conversion or just one that accept a base value parameter and perform conversion for that base number. In later case, the interface is small but will lead to more implementations(usefulness) and lesser complexity.

```c
// too many interfaces
convert.toBin(10);
convert.toHex(10);
convert.toOct(10);

// just one interface
convert.to(10, 2);
convert.to(10, 16);
convert.to(10, 8);
```

### A little copying is better than a dependency

Programmers move on from their code, its a proven universal fact. When the code base of a dependent package is not maintained regularly it increases the possibility of [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell). Sometimes our code does not even utilize a dependency completely. A clever move is to always copy some code to make up for the missing functionality instead of adding an extra node in dependency tree.

### Errors are good, treat them like friends

Learning to program is more about learning to make mistake and then correcting them. A naive move that most of us make is to ignore errors. Generally when program throw errors, we fix them and move on. What should be done is to reinforce the occurrence of errors with helpful messages and documentations. Introduce errors to users as you would introduce a friend to your family. A simple `if (err) print(err)` should not be the goto practice.

### Use good Component Names and Comment the code

Naming is the single most underrated thing while programming. Names should describe the purpose of code. A good name can be sufficient to convey if the named entity was an object, variable, function etc. Naming itself can suffice documentation needs for small programs, but description of code in comments will make source code a heaven for future developers.

### Use a style guide for code formatting

Lets get real, we don't like style guides, but they are awesome because they exist. Programmers talk through their code, and a style guide provides convention. Even if you hate them, you should care about future programmers and implement one.

### Use a suited Programming Language

A programming language comes with its own ecosystem, which means you can include previously written code in your own, incorporate supported tools and get help from community. Any [turing complete](https://en.wikipedia.org/wiki/Turing_completeness) language can solve [solvable](https://en.wikipedia.org/wiki/Halting_problem) computation problems, hence one language can indeed do the job of other. So, it is not a question of *what a language can or cannot do, but how hard it can be to implement for a certain job*? For example, when it comes to rapid debugging and human-friendly syntax, python wins but at the same time it is not suitable for game programming. Similarly C++ is a powerful OOP language for writing games but hard to use for front end web apps.

## Orders of Ignorance

Our field is one that requires constant touch with on going research and experiments with latest tools and libraries. We can not only enjoy learning new things everyday but also get rewarded for it.

Learning software development is "knowledge acquisition activity". To acquire knowledge, we should know five orders of Ignorance as proposed by Phillip G. Armour.


**0th Order Ignorance** - Lack of Ignorance, I know how to do something and can display by lack of ignorance with some sort of output.

**1st Order Ignorance** - Lack of Knowledge, I don't know something but I know that I don't know how to do it and I know what I need to learn in order to be able to do it.

**2nd Order Ignorance** - Lack of Awareness, I don't know that I don't know something.

**3rd Order Ignorance** - Lack of Process, I don't know a suitable efficient way to find out I don't know that I don't know something.

**4th Order Ignorance** - Meta Ignorance, I don't know about the five orders of ignorance.

Once we know our orders of ignorance it becomes easy to work on them. For example, while building a software system 2rd and 3rd order of ignorance are most dominant. Knowledge of these orders also convey how serious can it be for us to solve a problem with programming.

## Conclusion

This month I started to learn programming(again) by solving Brian Kernighan's C Programming Book, and I have found some alarming deficiency in my programming skills. I have been coding for past two and a half year. I have had always felt that something was missing in way I program. When my code fail I always look for "help" instead of a "solution". At first I used to think maybe I was lacking proper planning skills, but after through introspection I found that the problems were in my habits. I have learnt a lot by these tips. I hope it would be of help to you some day. 

**Source**
- [Professor Brailsford - Computerphile](https://www.youtube.com/results?search_query=professor+brailsford)
- [Five Orders of Ignorance](https://markhneedham.com/blog/2011/01/26/the-five-orders-of-ignorance-phillip-g-armour/)
- [Go Proverbs - Rob Pike 2015](https://www.youtube.com/watch?v=PAAkCSZUG1c)

*Follow DevDiary on [twitter](https://twitter.com/DiaryOfDev) for coding news and notifications.*