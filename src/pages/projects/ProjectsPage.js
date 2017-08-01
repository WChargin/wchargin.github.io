/*
 * The main component for the projects page.
 */

import React, {Component} from 'react';

import {Blurb, Heading, Link} from '../../Components';

Link.registerPreloadResources('/projects', () => [
    require('./aufbau.png'),
    require('./cmu-15-214.png'),
    // require('./physbam.png'),
    require('./kiosk.png'),
    require('./jgame.png'),
]);

export default class ProjectsPage extends Component {

    render() {
        const urls = {
            ahpcrc: "https://ahpcrc.stanford.edu/",
            ahpcrcPaper: require("../../shared_files/ahpcrc_writeup.pdf"),
            kiosk: "https://github.com/wchargin/kiosk",
            jgame: "https://github.com/wchargin/jgame",
            jgameGallery: "http://www.mrumrocks.org/portfolio#java-games",
        };
        const alternator = Blurb.makeAlternator();
        return <div>
            <Heading level={1}>Projects</Heading>
            <Blurb
                name="Assorted Java course projects"
                linkTo="/projects/cmu-15-214"
                image={require('./cmu-15-214.png')}
                imagePosition={alternator()}
            >
                <p>
                    For a software engineering course at CMU, I&nbsp;completed a number of projects that were both fun and technically interesting.
                    One such project was an extended version of Scrabble with a number of interesting features.
                    Another was a general-purpose data visualization framework that allowed plugins to supply data from arbitrary sources and visualize it in arbitrary ways.
                    Both of these had some interesting technical challenges.
                </p>
            </Blurb>
            <Blurb
                name="Automated grading"
                linkTo="/projects/aufbau"
                image={require('./aufbau.png')}
                imagePosition={alternator()}
            >
                <p>
                    I&nbsp;designed, implemented, and documented a modular automated grading system.
                    It’s designed to be simple and highly reusable, breaking up the assignment grading process into a sequence of self-contained “steps” that can be rearranged and configured to represent just about any assignment.
                    My system is used in CS&nbsp;102 classes at Cal&nbsp;Poly.
                </p>
            </Blurb>
            {/*
            <Blurb
                name="Physics simulations"
                linkTo="/projects/physbam"
                image={require('./physbam.png')}
                imagePosition={alternator()}
            >
                <p>
                    During June–August of&nbsp;2014, I&nbsp;worked at the <Link href={urls.ahpcrc}>Army High Performance Computing Research Center</Link>, conducting research on physics simulations on low-powered tablets.
                    I&nbsp;developed an application capable of performing various types of physically accurate simulations in real time, including articulated rigid body, cloth, smoke, and dynamic paint simulations. See <Link href={urls.ahpcrcPaper}>my research paper</Link> for more information.
                </p>
            </Blurb>
            */}
            <Blurb
                name="Kiosk"
                linkTo="/projects/kiosk"
                image={require('./kiosk.png')}
                imagePosition={alternator()}
            >
                <p>
                    Technology problems often plague debate conferences.
                    To address this, I&nbsp;created and deployed an application system that unifies the tools that chairs need to aptly moderate debates.
                    It integrates timing, voting, motions, speech analysis, and more, and networks across computers so that co-chairs can collaborate.
                    My system has been used at multiple conferences, by dozens of chairs and hundreds of students. It's open-source and <Link href={urls.kiosk}>available on GitHub</Link>.
                </p>
            </Blurb>
            <Blurb
                name="JGame"
                linkTo="/projects/jgame"
                image={require('./jgame.png')}
                imagePosition={alternator()}
            >
                <p>
                    My high school wanted to teach game development to beginning programmers, but existing Java libraries had prohibitively steep learning curves.
                    As such, I&nbsp;designed and implemented JGame, a library for the Java programming language that enables students to focus on learning computer science and game development concepts instead of worrying about implementation details.
                    My framework is widely used by students at my school; here is <Link href={urls.jgameGallery}>a sample of some student projects based on my library</Link>.
                    JGame is open-source and <Link href={urls.jgame}>available on GitHub</Link>.
                </p>
            </Blurb>
        </div>;
    }

}
