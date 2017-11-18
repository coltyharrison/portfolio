import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Planetary Guide to the Planets",
    'subtitle': '48 Hour Film Festival',
    "desc": `Zigthorp Lansbury reviews the planet Earth in this
            interplanetary travel show. This was originally
            written, cast, filmed and edited in 48 hours as
            part of the 2015 48 Hour Film Project: Los Angeles.`,
    'image': {
      'desc': "Planetery Guide to the Planets",
      'src': "images/planetary-guide2.png"
    },
    'embed': ["https://www.youtube.com/embed/sEoGhHCiXpM"]
  },
  {
    'title': "My Science Fiction Project",
    'subtitle': 'Cartoon Network',
    "desc": `For his school science fair, Nutmeg creates a science
            fiction wonder, Manler Wagner, a totally awesome robot with
            incredible time travel hair.`,
    'image': {
      'desc': "My Science Fiction Project",
      'src': "images/msfp.png"
    },
    'embed': ["https://www.youtube.com/embed/fQEdSguzWY4"]
  },
  {
    'title': "Sitka Ad Campaigns",
    'subtitle': 'Sitka CVB',
    "desc": `Extended advertising spots promoting tourism for the city of
             Sitka, Alaska. www.sitka.org`,
    'image': {
      'desc': "Sitka CVB",
      'src': "images/sitka.png"
    },
    'embed': [
        "https://www.youtube.com/embed/1WgARtNV6Q4",
        "https://www.youtube.com/embed/hHEOnlTv_jc",
        "https://www.youtube.com/embed/TXxW-QoVWm0",
        "https://www.youtube.com/embed/meAhv9b0Br0",
        "https://www.youtube.com/embed/_mDJcJXd2-8",
        "https://www.youtube.com/embed/jYU0mwak1Ag"
    ]
  },

];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
