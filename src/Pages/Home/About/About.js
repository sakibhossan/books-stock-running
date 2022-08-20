import React from 'react';

const About = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary'>1.What is the purpose of jwt and how does it work?</h2>
        <p>1.Ans:-JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        <br />
        <br />
        <h2 className='text-primary'>2.Differences between sql and nosql databases.</h2>
        <h1 className='text-info'>SQL</h1>
        <p>These databases have fixed or static or predefined schema</p>	
<p>These databases are not suited for hierarchical data storage.	</p>
<p>These databases are best suited for complex queries	</p>

<p>Vertically Scalable	</p>
<p>Follows ACID property	</p>
<h1  className='text-info'>NO SQL</h1>
<p>They have dynamic schema</p>
<p>These databases are best suited for hierarchical data storage.</p>
<p>These databases are not so good for complex queries</p>
<p>Horizontally scalable</p>
<p>Follows CAP(consistency, availability, partition tolerance)</p>
<br />
<br />

<h2 className='text-primary'>3.Difference between javascript and nodejs</h2>
<h1 className='text-info'>JAVA SCRIPT</h1>

<p>Javascript is a programming language that is used for writing scripts on the website.</p>
<p>Javascript can only be run in the browsers.</p>
<p>It is basically used on the client-side.</p>
<p>Javascript is capable enough to add HTML and play with the DOM. </p>
<p>	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
<h1  className='text-info'>NODE JS</h1>
<p>NodeJS is a Javascript runtime environment.</p>
<p>We can run Javascript outside the browser with the help of NodeJS.</p>
<p>It is mostly used on the server-side.</p>

<p>Nodejs does not have capability to add HTML tags.</p>
<p>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
        </div>
    );
};

export default About;