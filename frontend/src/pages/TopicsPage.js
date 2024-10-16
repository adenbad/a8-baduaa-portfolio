import React from 'react';

function TopicsPage(){
    return(
        <>
            <h2>Web Development Concepts</h2>
            <nav className="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascade">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    A <strong>Designated Homepage</strong> is the default path the web server is pathed to. In most 
                    situations, the designated homepage is often named “index.html”. The web application is made to 
                    return that file when a GET request is generated for that specified path “/”. Our Oregon State 
                    Engineering server software runs through the Apache web server, which also uses the designated 
                    homepage “index.html”. However, on Microsoft's .NET platform, their designated homepage is 
                    “default.html”. In some other instances, “index.js” or “index.php” will be used as the homepage.
                </p>

                <p>
                    Within the browser's <strong>Web Dev/Inspector Network</strong> output screen information such as 
                    <strong>requests</strong>, URL <strong>headers</strong>, methods, remote address(IP), <strong>status
                    code</strong>, and policy. More information about the request will be shown further below. When 
                    viewing the file's details from a local computer, the status code may not be present because there is 
                    no server that needs to be connected to. With that being said, the URL will likely start with the 
                    <strong>protocol</strong> “file://” instead.
                </p>

                <p>
                    The favicon.ico file has a status of 200 because the request was successful, meaning that the server was
                    able to find the location of that file and sent it back. However, the “main.js” and “main.css” have a 
                    request status of 404 because these file locations were not found. Statuses of 400-499 are client errors, 
                    while statuses of 200-299 are successful responses.
                </p>

                <p>
                    My URL: https://web.engr.oregonstate.edu/~baduaa/a1-baduaa/
                </p>
                    
                <p>
                    The <strong>scheme</strong> in my URL is “HTTPS” which specifies the protocol used for accessing the 
                    source. The <strong>subdomain</strong> is “web.engr.”. Subdomains are subsections within a domain, often 
                    used to organize and navigate different sections in that domain. The <strong>domain/server</strong> 
                    name is “oregonstate.edu”. This represents the main domain of the server where the resource is 
                    hosted. Lastly, the path to resource is “/~baduaa/a1-baduaa/”. This specifies the <strong>path</strong> to a 
                    specific resource or webpage requested on the server.
                </p>
            </article>

            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend Design</strong> is the process of creating the visual and interactive elements of a website or 
                    application that users directly interact with. It involves crafting the layout, typography, 
                    colors, and overall aesthetic to enhance usability and create an engaging user experience. 
                    Frontend designers utilize HTML, CSS, and JavaScript to translate design concepts into code 
                    that web browsers can understand and display. This includes structuring content with HTML, 
                    styling elements with CSS to achieve the desired look and feel, and adding interactivity and 
                    functionality with JavaScript. Effective frontend design not only focuses on aesthetics but 
                    also prioritizes accessibility, responsiveness across different devices, and performance 
                    optimization to ensure a seamless user experience.
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>Assists user in meeting their goals</dd>
                    <dt>Efficient</dt>
                    <dd>Ability to perform tasks with the least amount of steps</dd>
                    <dt>Easy To Navigate</dt>
                    <dd>User is able to navigate throughout the app easily</dd>
                    <dt>Error Free</dt>
                    <dd>Avoid accessibility and availability issues</dd>
                    <dt>Enjoyable/Engaging</dt>
                    <dd>Fits audience's needs in content and design. Should prevent user from seeking help elsewhere</dd>
                </dl>
                
                <p>
                    <strong>Page Layout Tags</strong> are used to help break up the flow of content which allows 
                    the page to be more readable. The <strong>main</strong> element is the primary block which holds
                    the content of the app/website. The <strong>header</strong> element is used to indicate a banner for 
                    an app or a website which typically includes a name, publisher and/or marketing slogan. If there is 
                    content that is related but is not able to stand on its own, the <strong>section</strong> element 
                    should be used. The section element is used to arrange similar content together. Within the section
                    element the <strong>article</strong> element is used to denote specific topic, often used with a
                    second-line header. Below the main element there is a <strong>footer</strong> element which usually 
                    holds legal information, contact information, and links to critical pages. Throughout these elements
                    the <strong>strong</strong> element is used to bolden important information throughout the app/website.
                </p>

                <ol>
                    <li>External Link</li>
                    <p>This links to a website outside of the current one. When the text is clicked, the link will take them to the specified page.</p>

                    <li>Internal Link</li>
                    <p>Links one text item to another using the attribute ID to define the reference the anchor needs in order to transfer to text item within the same page. </p>

                    <li>Page-To-Page</li>
                    <p>Allows the connection of different pages within the website/app as long as they are in the same directory.</p>
                </ol>

                <p><strong>Anchors</strong> are used to create hyperlinks to connect pages, texts and websites to one another. Allows
                    for a simple click and the user is taken to where ever the anchor is referenced.
                </p> 
            </article>
              
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    The <strong>six major image optimizing specifications</strong> encompass key elements crucial for enhancing image 
                    quality and optimizing file size. <strong>Image resolution</strong> determines the clarity and detail of an image, 
                    with higher resolutions yielding better quality but larger file sizes. <strong>Compression</strong> techniques, 
                    whether <strong>lossless</strong> or <strong>lossy</strong>, aim to reduce file sizes while maintaining acceptable 
                    visual quality. <strong>Color depth</strong> influences the accuracy of color representation, with higher color 
                    depths offering more nuanced colors but increasing file size. Selecting the appropriate <strong>file format</strong> 
                    is essential, with JPEG ideal for photographs due to its efficient compression, and PNG preferred for images with 
                    transparency or requiring lossless compression, such as logos. <strong>Metadata optimization</strong> involves 
                    streamlining embedded data to reduce file size without compromising quality. Lastly, <strong>responsive design 
                    considerations</strong> ensure images are optimized for various devices and screen sizes, promoting a seamless 
                    user experience across platforms. When it comes to <strong>file formats</strong>, JPEG and PNG are suitable for 
                    photos, while PNG and SVG are preferred for line art, offering the necessary balance between visual fidelity and 
                    efficient compression.
                </p>
            </article>
                
            <article id="favicons">
                <h3>Favicon</h3>
                <p>
                    Browsers and devices utilize favicons, commonly known as "<strong>favorite icons</strong>," in several prominent ways. 
                    First and foremost, these icons are displayed in browser tabs alongside the corresponding webpage titles, aiding users 
                    in quickly identifying and distinguishing between multiple open tabs. Additionally, favicons appear next to bookmarked 
                    links within a browser's bookmark bar or menu, offering users a visual reference point for their saved websites. They 
                    also serve as visual indicators within the address bar of some browsers, providing users with immediate recognition of 
                    the website they are currently visiting. In certain search engines, like Google, favicons may accompany search results, 
                    facilitating quicker identification of relevant websites. Particularly on mobile devices, favicons serve a crucial role 
                    as home screen icons when users add a website to their device's home screen. This integration blurs the lines between 
                    web apps and native apps, enabling seamless access to frequently visited websites. Overall, favicons play a vital role 
                    in branding, user experience, and visual identification across various browsers and devices, enhancing the recognition 
                    and accessibility of websites for users.
                </p>
            </article>

            <article id="cascade">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Incorporating stylesheets into websites and apps is essential for several reasons. Firstly
                    , stylesheets enable the separation of concerns by allowing the content (HTML) and 
                    presentation (CSS) to be managed independently. This separation promotes cleaner code and 
                    easier maintenance, as styling changes can be applied globally across the site without altering 
                    the underlying content structure. Secondly, stylesheets ensure consistency and branding by 
                    providing a unified look and feel across multiple pages or components. This consistency helps 
                    reinforce brand identity and improves user recognition. Additionally, CSS facilitates responsive 
                    design, allowing layouts and styles to adapt seamlessly to different device sizes and screen 
                    resolutions. This responsiveness is critical for providing a consistent user experience across 
                    various devices. Furthermore, maintaining styles in centralized stylesheets enhances scalability 
                    and reduces redundancy in code. Lastly, proper use of stylesheets contributes to accessibility and 
                    usability by improving readability, contrast, and overall user interaction, ensuring that websites 
                    are accessible to all users regardless of their device or abilities.
                </p>
                <p>
                    There are several ways to incorporate stylesheets into web projects, each serving different purposes 
                    and offering unique advantages. First, external stylesheets (linking) involve linking an external 
                    CSS file using the <code>&lt;link&gt;</code> element in the HTML <code>&lt;head&gt;</code> section. This approach promotes code organization, 
                    reuse, and caching. Second, internal stylesheets (embedded) allow CSS rules to be written directly
                    within the HTML document using the <code>&lt;style&gt;</code> element, suitable for smaller projects 
                    or single-page applications. Inline styles apply CSS directly to HTML elements using the style 
                    attribute, providing specific styling but often resulting in less maintainable code. CSS 
                    preprocessors like Sass or Less offer advanced features such as variables and mixins, enhancing 
                    CSS capabilities and improving code organization. Lastly, incorporating CSS frameworks like 
                    Bootstrap or Tailwind CSS provides pre-styled components and utilities, speeding up 
                    development and ensuring responsive design. Choosing the right method depends on project 
                    requirements, scalability needs, and development preferences, with each approach offering benefits 
                    in terms of maintainability, performance, and efficiency.
                </p>
            </article>
                    
            <article id="forms">
                <h2>Forms</h2>
                <h3>Form Usability, Elements, Attributes, Best Practices, and Accessibility</h3>
                <p>Accessible forms aim to achieve six major goals:</p>
                <ol>
                    <li>Perceivability</li>
                    <li>Operability</li>
                    <li>Understandability</li>
                    <li>Robustness</li>
                    <li>Compatibility</li>
                    <li>Efficiency</li>
                </ol>
                <p>Accessible forms improve user experience for all individuals, including those with disabilities, by ensuring ease of use and comprehension.</p>
                <p>Major form tags include <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>, and their respective attributes. These tags enable the creation of interactive and user-friendly input interfaces for web applications.</p>
                <p>Form style recommendations such as clear labeling, logical tab order, proper validation messages, and sufficient contrast contribute to improved usability by enhancing user understanding and navigation within forms.</p>
            </article>
                
            <article id="express">
                <h2>Express</h2>
                <h3>Node.js, npm, and Express</h3>
                <p>Node.js is a server-side JavaScript runtime environment, npm is its package manager used for installing and managing dependencies, and Express is a web application framework for Node.js. Together, these technologies empower developers to build scalable and efficient web applications.</p>
                <p>By leveraging Node.js, npm, and Express, developers can streamline development processes, handle server-side logic, manage middleware, and create robust APIs, enhancing the overall web development experience.</p>
            </article>

            <article id="javascript">
                <h2>JavaScript</h2>
                <p><strong>Main Data Types:</strong> JavaScript has primitive data types like strings, numbers, booleans, and more complex data types like objects and arrays.</p>
                <p><strong>Usage of Objects, Arrays, and JSON:</strong> Objects and arrays are fundamental data structures used to store and manipulate data. JSON (JavaScript Object Notation) is a popular format for data interchange.</p>
                <p><strong>Usage of Conditionals and Loops:</strong> Conditionals (if-else statements) and loops (for, while) are used for flow control and iteration in JavaScript.</p>
                <p><strong>Object-Oriented Programming (OOP):</strong> OOP is a programming paradigm based on the concept of objects, encapsulation, inheritance, and polymorphism.</p>
                <p><strong>Functional Programming:</strong> Functional programming emphasizes functions as first-class citizens, immutability, and higher-order functions.</p>
            </article>
        </>
    );
}

export default TopicsPage;
