import React from 'react';
import {
  Phone,
  Email,
  Location,
  Website,
  Github,
  Twitter,
  Typewriter,
  Calendar,
  Toolbox
} from '../../components/icons';

// https://goo.gl/MrXVRS - micro UUID!
const uuid = a=>a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid);

const Page1 = () => {
  const iconStyles = { width: '1.5em', height: '1.5em' };
  const fill = '#4c4c4c';

  return (
    <div key={uuid()} className='h-100 flex flex-column fw1 page'>
      <header className='flex'>
        <div className='name relative f-5 fw9 ttu'>
          <div>Aaron</div>
          <div>Cordova</div>
          {/*<img className='db aaron' src='graff_aaron.png' />
          <img className='db cordova relative' src='graff_cordova.png' />*/}
        </div>
        <div className='flex-grow ttu tracked-mega self-center tc'>JavaScript Developer</div>
      </header>

      <div className='body flex flex-grow nt3'>

        {/* LEFT SIDE*/}
        <div className='left-side w-40 flex flex-column justify-center'>

          {/* CONTACT */}
          <section className='pl3'>
            <h2>CONTACT</h2>

            <div className='flex flex-auto mb3 items-center'>
              <a href='mailto:theqodesmith@gmail.com'>
                <Email style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a href='mailto:theqodesmith@gmail.com'>theqodesmith@gmail.com</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='http://twitter.com/qodesmith'>
                <Twitter style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='http://twitter.com/qodesmith'>twitter.com/qodesmith</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <Phone style={iconStyles} fill={fill} />
              <div className='flex-grow tr'>917.524.7817</div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <Location style={iconStyles} fill={fill} />
              <div className='flex-grow tr'>Staten Island, NY</div>
            </div>
          </section>

          {/* PORTFOLIO */}
          <section className='pl3'>
            <h2>PORTFOLIO</h2>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='http://aaroncordova.xyz'>
                <Website style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='http://aaroncordova.xyz'>aaroncordova.xyz</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='http://github.com/qodesmith'>
                <Github style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='http://github.com/qodesmith'>github.com/qodesmith</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='http://freestylefam.com'>
                <Website style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='http://freestylefam.com'>freestylefam.com</a>
              </div>
            </div>
          </section>

          {/* OPEN SOURCE */}
          <section className='pl3'>
            <h2>OPEN SOURCE</h2>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='https://github.com/qodesmith/typer'>
                <Typewriter style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='https://github.com/qodesmith/typer'>Typer.js</a>
                <span> &ndash; </span>
                <a target='_blank' href='http://aaroncordova.xyz/typer'>demo</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='https://github.com/qodesmith/qode-creative-starter-kit'>
                <Toolbox style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='https://github.com/qodesmith/create-new-app'>Create New App</a>
              </div>
            </div>

            <div className='flex flex-auto mb3 items-center'>
              <a target='_blank' href='https://github.com/qodesmith/datepicker'>
                <Calendar style={iconStyles} fill={fill} />
              </a>
              <div className='flex-grow tr'>
                <a target='_blank' href='https://github.com/qodesmith/datepicker'>Datepicker</a>
                {/* <span> &ndash; </span>
                <a target='_blank' href=''>demo</a> */}
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className='pl3'>
            <h2>EDUCATION</h2>

            <div className='mb3'>
              <div className='b mb1'>General Assembly</div>
              <div className='ml2'>Full stack coding bootcamp</div>
            </div>

            <div className='mb3'>
              <div className='b mb1'>Institute of Audio Research</div>
              <div className='ml2'>Digital audio recording</div>
            </div>

            <div className='mb3'>
              <div className='b mb1'>The Cittone Institute</div>
              <div className='ml2'>Analog and digital circuitry</div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className='right-side w-60 ph3'>

          {/* INTRODUCTION */}
          <section className='flex'>
            <div className='timeline first'></div>
            <div className='info flex-grow'>
              <h2>INTRODUCTION</h2>
              <p>What I'm playing with: <br /> [ es6+, react, redux, webpack, node, cypress ]</p>
              <p>Hi, I'm Aaron and I'm all-things JavaScript! I solve problems with code & deploy to production daily. Functional programming! <span className='i'>Readbility > Complexity</span></p>
            </div>
          </section>

          {/* TOP SKILLS */}
          <section className='flex'>
            <div className='timeline'></div>
            <div className='info flex-grow'>
              <h2>TOP SKILLS</h2>

              {/* JavaScript */}
              <div className='flex mv1 i'>
                <div className='w-30'>JavaScript <span className='f7'>(ES7+)</span></div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar javascript'></div>
                </div>
              </div>

              {/* React */}
              <div className='flex mv1 i'>
                <div className='w-30'>React</div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar w-80'></div>
                </div>
              </div>

              {/* Redux */}
              <div className='flex mv1 i'>
                <div className='w-30'>Redux</div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar w-80'></div>
                </div>
              </div>

              {/* Webpack */}
              <div className='flex mv1 i'>
                <div className='w-30'>Webpack</div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar w-75'></div>
                </div>
              </div>

              {/* Node */}
              <div className='flex mv1 i'>
                <div className='w-30'>Node</div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar w-70'></div>
                </div>
              </div>

              {/* MongoDB */}
              <div className='flex mv1 i'>
                <div className='w-30'>MongoDB</div>
                <div className='relative flex-grow'>
                  <div className='bar range-bar w-100'></div>
                  <div className='bar total-bar w-70'></div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className='flex'>
            <div className='timeline last'></div>
            <div className='info flex-grow'>
              <h2>EXPERIENCE</h2>

              <div className='flex items-center justify-between mb1'>
                <div className='b'>TRANSFIX</div>
                <div className='normal'>Front End Engineer</div>
              </div>
              <div className='i'>May 2017 &ndash; present</div>
              <p><span className='i normal'>Leading the revolution (and modernization) of the multi-billion dollar shipping industry.</span> I created a custom React app generator in Node which is used to create <span className='i'>all</span> our internal applications as well as fast prototyping. Lead front end work for our "swat" team and deployed production code daily. Testing with Cypress.</p>

              <div className='flex items-center justify-between mt3 mb1'>
                <div className='b'>L2, INC</div>
                <div className='normal'>Front End Developer</div>
              </div>
              <div className='i'>June 2016 &ndash; May 2017</div>
              <p><span className='i normal'>Measuring the immeasurable &mdash; gaining insights on the digital performance of brands.</span> So much data! I initiated - and built from the ground up - a completely new way for the company to manually input collected data. Migrated away from Excel in favor of Google Sheets via their API and Apps Script, allowing off-shore teams to participate with minimal supervision.</p>

              <div className='flex items-center justify-between mt3 mb1'>
                <div className='b'>Accenture</div>
                <div className='normal'>Front End Developer</div>
              </div>
              <div className='i'>July 2015 &ndash; June 2016</div>
              <p><span className='i normal'>Guiding the world's top companies to do what they do best.</span> Wrote code viewed by millions for one of Florida's leading electric companies. Daily stand-up's with distributed teams across the nation and globe. Studied Angular in Mexico!</p>

              <div className='flex'>
                <div className='mr5'>
                  <h4 className='mb1'>Freelance Wordpress Design</h4>
                  <div className='i'>2010 &ndash; 2015</div>
                </div>
                <div>
                  <h4 className='mb1'>NYC MTA</h4>
                  <div className='i'>2005 &ndash; 2015</div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Resume = () => <Page1 />; // Return an array if we end up with multiple pages.

export default Resume;
