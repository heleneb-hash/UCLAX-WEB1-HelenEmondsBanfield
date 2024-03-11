import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    <li>
                        HTML is the content, so it is what content is shown on a
                        website for example, like the text that says “Sun and
                        Moon”
                    </li>
                    <li>
                        CSS is the appearance of that content, for example the
                        font size, the color, the alignment on the page.
                    </li>
                    <li>
                        JavaScript is the function, so for example when we are
                        telling the code to change from the sun to the moon when
                        the mouse enters, and then to change back to the sun
                        when the mouse leaves.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        Git: Distributed Version Control System (DVCS) — means
                        the whole coding system is mirrored on each developers
                        computer Can track changes in the codebase Manage
                        different versions of software Multiple developers can
                        work on a project simultaneously Maintains a complete
                        history of changes
                    </li>
                    <li>
                        GitHub: GitHub is a platform where you can access Git
                        repositories The site offers modes of collaboration,
                        making it easier for developers to work together
                        Features; Pull requests, project management, interface
                        for managing repositories, issue tracking Git is the
                        coding system itself, while GitHub is the platform that
                        these coding repositories are hosted on.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <ul>
                    <li>
                        JQuery: A javascript library/framework used to build web
                        applications, designed to; simplify javascript coding
                        for things like DOM manipulation, event handling, and
                        AJAX requests across different browsers. Enhances and
                        simplifies javascript. --- DOM Manipulation: provides
                        methods to directly manipulate DOM elements AJAX
                        Requests: sends and receives data and systematically
                        updates content without refreshing an entire page
                    </li>
                    <li>
                        React: React is also a library/framework used to build
                        web applications, but react is: A javascript library
                        specifically used for designing web interfaces,
                        specifically SPAs. Creates reusable UI components
                        Manages the application state.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <li>
                        Front End Developer: Website Client side and user
                        experience Translate web design into functional code
                        Cross browser compatibility Quality testing Work along
                        designers and back end developers Strong understanding
                        of HDML, CSS, JavaScript
                    </li>
                    <li>
                        Back End Developer: Works on parts of website or
                        application thats not visible ot the user or client Back
                        end contains the coding and function of the application
                        API and core application logic Responsible for making
                        the website to run efficiently and streamlining through
                        the process Rarely work with the clients, work with the
                        front end and designers Core logic
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        Document Relative is: the path you take to the specified
                        document, starting from the location of the current
                        document/file. For example, if you are making a path to
                        a file in the same directory as the file you are in, you
                        would use ‘./ ‘ to signify it’s in the same directory,
                        then name the file you are making a path to. You could
                        then add a period, ‘ ../ ’ to go up a directory.
                    </li>
                    <li>
                        Root Relative is: when you make a path to a file
                        starting at the root directory of your website. So for
                        example in our website, one root directory we work in is
                        Pages, so you would start with a / (forward slash) to
                        signify the root directory, then name the root document
                        which would be Pages, and whatever the next document
                        your file is in, then the file you are making a path to,
                        for example Home. This would look like ‘
                        /Pages/Home/Home.jsx ’.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <li>
                        JPG (Joint Photographic Experts Group): Jpegs can be
                        compressed at high levels, which makes smaller file
                        sizes, but loses image quality as a result They are best
                        used for photographs since they support millions of
                        colors
                    </li>
                    <li>
                        GIF (Graphics Interchange Format): Gifs support
                        animations, and supports lossy and lossless compression
                        (whether original data can be recovered) Gif images are
                        limited to 256 colors, so they are better suited for
                        simple graphics, logos, icons, and animated images
                    </li>
                    <li>
                        PNG (Portable Network Graphics): Allows images with
                        transparent backgrounds Larger file sizes that jpegs
                        Used for photos where preserved image quality is
                        important (logos, graphics, and images)
                    </li>
                    <li>
                        SVG (Scalable Vector Graphics): Describes images using
                        geometric shapes (XML-vector based) Can be scaled to any
                        size without loss of quality Smaller in size compared to
                        other formats Ideal for images that need to be re-scaled
                        responsively, such as responsive web design
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <li>
                        Product Manager: Responsible for the overall vision of
                        the team and project, they work with stakeholders,
                        customers, and the development team.
                    </li>
                    <li>
                        Product Owner: They are the voice of the customer and
                        stakeholders.
                    </li>
                    <li>
                        Business Analyst: Works with stakeholders to gather,
                        analyze, and document business requirements. Translates
                        requirements to be understood by the development team.
                    </li>
                    <li>
                        Scrum Master: Oversees the Scrum Team and facilitates
                        the Scrum Process. Remove impediments, facilitate
                        meetings, and help the team improve their processes.
                    </li>
                    <li>
                        UX Designer: Designs overall user experience of the
                        product. Conducts research, makes wireframes, prototypes
                        and interfaces best suited to the user’s experience.
                    </li>
                    <li>
                        Developer/Engineer: Writes code that implements features
                        and functionality to a product. Part of a
                        cross-functional team that delivers working software
                    </li>
                    <li>
                        QA/SDET (Software Development Engineer in Test): Ensure
                        the quality of the software or product. Write and
                        execute product tests, and collaborate with developers
                        to fix bugs.
                    </li>
                    <li>
                        DevOps: Practices that combine software development and
                        IT operations, deliver software developments more
                        frequently and reliably.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
