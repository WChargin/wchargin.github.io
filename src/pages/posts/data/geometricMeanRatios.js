import React from 'react';

import dedent from '../../../dedent';
import {Katex, Link} from '../../../Components';

function render(Title, Section) {
    const urls = {
        geometricMean: "https://en.wikipedia.org/wiki/Geometric_mean",
        jensen: "https://en.wikipedia.org/wiki/Jensen%27s_inequality",
        amgm: "https://en.wikipedia.org/wiki/Inequality_of_arithmetic_and_geometric_means",
    };
    return <article>
        <Title>Why ratios want geometric means</Title>
        <p>
            You may have heard that when taking the average of a set of ratios, it’s best to use the <Link href={urls.geometricMean}>geometric mean</Link> instead of the normal arithmetic mean.
            For years, I&nbsp;took this as received wisdom, but recently I&nbsp;decided to think about it more carefully.
            It makes sense to me now—here’s my thought process.
        </p>
        <Section>Speed test</Section>
        <p>
            Suppose that you have two computer programs, Program&nbsp;A and Program&nbsp;B.
            You want to compare how fast the two programs run on a variety of test cases.
            You time them, and observe the following results:
        </p>
        <ul>
            <li>Trial&nbsp;1: Program&nbsp;A is 2× faster.</li>
            <li>Trial&nbsp;2: Program&nbsp;A is 4× faster.</li>
            <li>Trial&nbsp;3: Program&nbsp;A is 0.2× as fast.</li>
        </ul>
        <p>
            Call these ratios&nbsp;<Katex tex="a_1 = 2.0" />, <Katex tex="a_2 = 4.0" />, and <Katex tex="a_3 = 0.2" />.
            Program&nbsp;A is faster than Program&nbsp;B on trial&nbsp;<Katex tex="i" /> if <Katex tex="a_i > 1" />.
            We can see that Program&nbsp;A is sometimes faster, but Program&nbsp;B is sometimes faster, too.
            Which program is faster “on average”?
        </p>
        <p>
            With a simple arithmetic mean, we could compute:
        </p>
        <Katex display={true} tex="\bar a = \frac{1}{3} (a_1 + a_2 + a_3) \approx 2.1." />
        <p>
            So, “on average”, it looks like Program&nbsp;A is <Katex tex="2.1" />&nbsp;times faster.
        </p>
        <p>
            But something’s not quite right here.
            Suppose that we had looked at the exact same timing data from the perspective of Program&nbsp;B instead.
            We would have observed these results:
        </p>
        <ul>
            <li>Trial&nbsp;1: Program&nbsp;B is 0.5× as fast.</li>
            <li>Trial&nbsp;2: Program&nbsp;B is 0.25× as fast.</li>
            <li>Trial&nbsp;3: Program&nbsp;B is 5× faster.</li>
        </ul>
        <p>
            That is, we have <Katex tex="b_1 = 0.5" />, <Katex tex="b_2 = 0.25" />, and&nbsp;<Katex tex="b_3 = 5.0" />, where each&nbsp;<Katex tex="b_i = 1 / a_i" />.
            Taking an arithmetic mean again, we find:
        </p>
        <Katex display={true} tex="\bar b = \frac{1}{3} (b_1 + b_2 + b_3) \approx 1.9." />
        <p>
            But then we are forced to conclude that, “on average”, Program&nbsp;A is <Katex tex="2.1" />&nbsp;times faster than Program&nbsp;B, and Program&nbsp;B is also <Katex tex="1.9" />&nbsp;times faster than Program&nbsp;A!
            Surely any framework that leads us to such a conclusion must be flawed.
            An arithmetic mean must not be the right tool: let’s return to the drawing board.
        </p>
        <Section>Composition</Section>
        <p>
            Consider for a moment what the arithmetic mean <em>means</em>.
            It says, “combine your three quantities by adding them together, then scale them down by a factor of three to counteract the change in magnitude”.
            It we have three quantities of distance, or of mass, or of time, this makes sense.
            If you travel <Katex tex="3" />&nbsp;meters and then travel <Katex tex="2" />&nbsp;meters, you’ve traveled <Katex tex="3 + 2 = 5" />&nbsp;meters.
        </p>
        <p>
            But that’s not how ratios compose.
            If you make a program <Katex tex="1.2" />&nbsp;times faster, and then make it <Katex tex="1.2" />&nbsp;times faster again, you haven’t made it <Katex tex="1.2 + 1.2 = 1.4" />&nbsp;times faster—you’ve made it <Katex tex="1.2 \times 1.2 = 1.44" />&nbsp;times faster.
            Thus, to take an average in the same <em>spirit</em> as the arithmetic mean, we should combine our three ratios <em>by multiplying them together</em>, and then scale them down <em>by a third root</em> to counteract the change in magnitude.
            And this is precisely the geometric mean.
        </p>
        <p>
            Returning to our speed comparison example, we can reëvaluate how much faster Program&nbsp;A is “on average”…
        </p>
        <Katex display={true} tex="\tilde a = (a_1 \cdot a_2 \cdot a_3)^{1/3} = 1.6," />
        <p>
            …and Program&nbsp;B:
        </p>
        <Katex display={true} tex="\tilde b = (b_1 \cdot b_2 \cdot b_3)^{1/3} = 0.625." />
        <p>
            Now our results are consistent: Program&nbsp;A is faster, and Program&nbsp;B is slower.
            Moreover, note that <Katex tex="\tilde a = 1 / \tilde b" />, which makes sense.
            This is another property that carries over in spirit from arithmetic means.
            If you travel, on average, <Katex tex="3" />&nbsp;meters farther than me, then I&nbsp;travel <Katex tex="-3" />&nbsp;meters farther than you; and just as ratios compose with multiplication rather than addition, they invert with reciprocation rather than negation.
        </p>
        <Section>The logarithmic connection</Section>
        <p>
            Look more closely at these analogies that hold “in spirit” between ratios and the more general real numbers:
        </p>
        <ul>
            <li>Ratios live in <Katex tex="\mathbb{R}^+" />, and reals live in <Katex tex="\mathbb{R}" />.</li>
            <li>Ratios combine with multiplication, and reals with addition.</li>
            <li>Ratios scale down with <Katex tex="n" />th roots, and reals with division.</li>
            <li>Ratios invert with reciprocation, and reals with negation.</li>
        </ul>
        <p>
            The common structure underlying these mappings is the logarithm:
        </p>
        <ul>
            <li>The image of <Katex tex="\mathbb{R}^+" /> under the logarithm is <Katex tex="\mathbb{R}" />.</li>
            <li>For ratios&nbsp;<Katex tex="a" /> and&nbsp;<Katex tex="b" />, we have <Katex tex="\log(a \cdot b) = \log(a) + \log(b)" />.</li>
            <li>For a ratio&nbsp;<Katex tex="a" /> and positive scalar&nbsp;<Katex tex="c" />, we have <Katex tex="\log(a^{1/c}) = \log(a) / c" />.</li>
            <li>For a ratio&nbsp;<Katex tex="a" />, we have <Katex tex="\log(1 / a) = -\mskip-1mu\log(a)" />.</li>
        </ul>
        <p>
            Because the logarithm preserves all the structure that we care about, we say that it is a <em>homomorphism</em> (“same shape”) from the ratios to the reals.
            Moreover, since the logarithm is invertible (via the exponential function), and its inverse likewise preserves this structure, it is an <em>isomorphism</em>, which means that these two spaces are really just different characterizations of the same thing.
            Thus, another way to think about the geometric mean is that it uses the logarithm to bring the ratios into “linear space”, takes their arithmetic mean, and then returns them to their natural habitat:
        </p>
        <Katex display={true} tex={dedent`\
              \\exp(\\overline{\\log z_1, \\dotsc, \\log z_n})
              = \\exp\\Biggl( \\frac{1}{n} \\sum_{i=1}^{n} \\log z_i \\Biggr)
              = \\Biggl( \\,\\prod_{i=1}^{n} z_i \\Biggr)^{\\mskip-3mu 1/n}
              = \\widetilde{z_1, \\dotsc, z_n}.
        `} />
        <p>
            This also suggests that if we wanted to, say, summarize the distribution of a random variable representing ratios, we should probably not take its expectation.
            We would get a more meaningful result by taking the exponential of the expectation of its logarithm, <Katex tex="\exp(\mathbb{E}[\log Z])" />.
            And this in turn brings to mind <Link href={urls.jensen}>Jensen’s inequality</Link>, with which we immediately obtain a nice proof of the <Link href={urls.amgm}>AM–GM inequality</Link> by taking <Katex tex="Z" /> to be a uniform random variable over a set <Katex tex="z_1, \dotsc, z_n" />:
        </p>
        <Katex display={true} tex="\widetilde{z_1, \dotsc, z_n} = \exp(\mathbb{E}[\log Z]) \leq \exp(\log(\mathbb{E}[Z])) = \mathbb{E}[Z] = \overline{z_1, \dotsc, z_n}," />
        <p>
            with the second step due to Jensen’s inequality, the concavity of the logarithm, and the monotonicity of the exponential.
            All the pieces fit nicely together… one connection at a time.
        </p>
    </article>;
}

export default {
    id: 7,
    title: 'Why ratios want geometric means',
    filename: 'geometricMeanRatios.js',
    date: '2020-08-28',
    render,
};
