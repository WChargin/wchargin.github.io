/*
 * The main component for the experience page.
 */

import React, {Component} from 'react';

import {Blurb, Heading, Link} from '../../Components';

Link.registerPreloadResources('/experience', () => [
    require('./khanacademy.png'),
    require('./ahpcrc.png'),
    require('./lcm.png'),
]);

export default class ExperiencePage extends Component {

    render() {
        const urls = {
            ka: 'https://www.khanacademy.org/',
            thumbnails: 'http://engineering.khanacademy.org/posts/making-thumbnails-fast.htm',
            ahpcrc: 'https://ahpcrc.stanford.edu/',
            ahpcrcPaper: require('../../shared_files/ahpcrc_writeup.pdf'),
            lcm: 'http://www.creativedelegates.org/content-loader.php?page_key=index',
            mun: 'http://en.wikipedia.org/wiki/Model_United_Nations',
        };
        const alternator = Blurb.makeAlternator();
        return <div>
            <Heading level={1}>Experience</Heading>
            <Blurb
                name="Khan Academy (2015)"
                image={require('./khanacademy.png')}
                imagePosition={alternator()}
            >
                During the summer of 2015, I&nbsp;worked at
                {" "}<Link href={urls.ka}>Khan Academy</Link> on a few
                web&nbsp;frontend and backend projects. Specifically,&nbsp;I
                <ul>
                    <li>
                        added support to our CMS for content creators to
                        upload custom thumbnails,
                        {" "}<Link href={urls.thumbnails}>
                            implemented server-side compositing of these
                            images,
                        </Link>, and used the composited thumbnails throughout
                        our site and on YouTube;
                    </li>
                    <li>
                        productionized and rolled out a new video player, both
                        to grant users more immediate control over the playback
                        (e.g., with a prominent speed selector whose value
                        persists across page loads) and also to lay the ground
                        work for more in-video content in the future;
                    </li>
                    <li>
                        implemented streaks (&agrave;&nbsp;la Duolingo) to
                        encourage deep, exploratory learning as opposed to
                        just-in-time test prep, and to increase user
                        engagement;
                    </li>
                    <li>
                        implemented hot loading of&nbsp;JSX and&nbsp;CSS/Less
                        files to dramatically improve developer productivity by
                        cutting down on iteration time; and
                    </li>
                    <li>
                        improved our content publish process performance
                        by&nbsp;17%, and then by another&nbsp;48% by decreasing
                        the complexity of one expensive step
                        from <i>O</i>(<i>n</i>&nbsp;&middot;&nbsp;<i>m</i>)
                        to <i>O</i>(<i>n</i>&nbsp;+&nbsp;<i>m</i>).
                    </li>
                </ul>
                <p>
                    We use Python with Google App&nbsp;Engine for our backend,
                    and the wonderful React for our frontend.
                </p>
            </Blurb>
            <Blurb
                name="AHPCRC Summer Institute"
                image={require('./ahpcrc.png')}
                imagePosition={alternator()}
            >
                <p>
                    I&nbsp;conducted research and studied at the
                    {" "}<Link href={urls.ahpcrc}>
                        Army High Performance Computing Research Center
                    </Link> during the 2014&nbsp;Summer Institute
                    at&nbsp;Stanford University. During these eight weeks,
                    I&nbsp;studied various topics from math, computer science,
                    and engineering, such as numerical optimization, PDEs, and
                    computational mesh generation. I&nbsp;also worked on
                    research, developing real-time physics simulations on
                    low-powered Android tablets. (See
                    {" "}<Link to="/projects/physbam">
                        the relevant project page
                    </Link> for more information.) As part of this research,
                    I&nbsp;developed an algorithm for distribution of points on
                    a 3D&nbsp;triangulated mesh in accordance with a given
                    UV&nbsp;density function. I&nbsp;received a verbal
                    commendation on the excellence of
                    {" "}<Link href={urls.ahpcrcPaper}>
                        my research report
                    </Link>.
                </p>
            </Blurb>
            <Blurb
                name="League of Creative Minds"
                image={require('./lcm.png')}
                imagePosition={alternator()}
            >
                <p>
                    I&nbsp;worked with the
                    {" "}<Link href={urls.lcm}>League of Creative Minds</Link>,
                    a <Link href={urls.mun}>Model&nbsp;UN</Link> debate
                    organization, from&nbsp;2011 to&nbsp;2014, both as a
                    student and as a secretariat member.
                </p>
                <p>
                    As Undersecretary-General of Technology and Innovation,
                    my worked included audio/visual setup, networking,
                    communications, and the like.{" "}
                    <Link to="/projects/kiosk">
                        I&nbsp;developed&nbsp;Kiosk
                    </Link> to fix some of the problems that I&nbsp;observed,
                    and earned the Model Diplomat award for its creation.
                    I&nbsp;also delivered scientific and technical
                    presentations to students in preparation for debates.
                </p>
                <p>
                    As a student, I&nbsp;was also Head Delegate for two years.
                    I&nbsp;won the Best Delegate award at WEMUN&nbsp;2011
                    in&nbsp;Beijing, and the Most Persuasive Delegate award
                    at MUNOS&nbsp;2011 in Seoul.
                </p>
            </Blurb>
        </div>;
    }

}
