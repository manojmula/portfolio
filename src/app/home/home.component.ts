import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgTerminal, NgTerminalModule } from 'ng-terminal';


interface Skill {
  name: string;
  description: string;
  logo : string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface NpmPackage {
  title: string;
  description: string;
  image : string;
  keywords: string[];
  link: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: Date;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isUserInteraction = false;


  constructor(
    private route : ActivatedRoute
  )
  {
   
  }
  
  scrollToPortfolio() {
    // Implement scrolling to portfolio section here
  }

  skills: Skill[] = [
    {name: 'HTML & CSS', description: 'Semantic HTML markup and modern CSS techniques for responsive design.', logo: 'html.png'},
    {name: 'JavaScript', description: 'ES6 and modern JavaScript features, including promises, async/await, etc.', logo: 'javascript.png'},
    {name: 'TypeScript', description: 'Building robust, scalable applications using TypeScript language.', logo: 'typescript.png'},
    {name: 'React', description: 'Creating fast, interactive UIs using the React library and its ecosystem.', logo: 'react.svg'},
    {name: 'Angular', description: 'Building dynamic, scalable web applications using Angular framework.', logo: 'angular.png'},
    {name: 'Node.js', description: 'Building server-side applications and APIs using Node.js runtime environment.', logo: 'node.png'},
    {name: 'MySQL', description: 'Designing and managing databases using MySQL, including complex queries and optimization.', logo: 'mysql.png'},
    {name: 'MongoDB', description: 'Working with NoSQL databases using MongoDB, including data modeling and querying.', logo: 'mongodb.png'},
    {name: 'Git', description: 'Managing source code using Git version control system.', logo: 'git.png'},
    {name: 'Ubuntu', description: 'Experienced with the Ubuntu operating system, including command line tools, system administration, and scripting.', logo: 'ubuntu.png'},
    {name: 'AWS', description: 'Proficient in deploying and managing applications on AWS cloud platform.', logo: 'aws.webp'},

    // Add as many as you need...
  ];

  packages: NpmPackage[] = [
    {
      title: 'Express JS',
      description: 'Most award .',
      image : 'express.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://expressjs.com/'
    },
    {
      title: 'JSON Web Token',
      description: 'Another description of your package.',
      image : 'jwt.webp',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/jsonwebtoken'
    },
    {
      title: 'Sequelize',
      description: 'Another description of your package.',
      image : 'sequelize.svg',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/sequelize'
    },
    {
      title: 'Socket IO',
      description: 'Another description of your package.',
      image : 'socketio.webp',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://socket.io/'
    },
    {
      title: 'Validator',
      description: 'Another description of your package.',
      image : 'validator.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/validator'
    },
    {
      title: 'Joi',
      description: 'Another description of your package.',
      image : 'joi.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/validator'
    },
    {
      title: 'Date-fns',
      description: 'Another description of your package.',
      image : 'date-fns.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://date-fns.org/'
    },
    {
      title: 'Momentjs',
      description: 'Another description of your package.',
      image : 'momentjs.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/moment'
    },
    {
      title: 'bcrypt',
      description: 'Another description of your package.',
      image : 'bycrypt.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/bcrypt'
    },
    {
      title: 'uuid',
      description: 'Another description of your package.',
      image : 'uuid.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/uuid'
    },
    {
      title: 'Winston',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/winston'
    },
    {
      title: 'Eslint',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: 'dotenv',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: 'chalk',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: '@aws-sdk',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: 'axios',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: 'mongoose',
      description: 'Another description of your package.',
      image : '',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://eslint.org/'
    },
    {
      title: 'Nodemon',
      description: 'A description of your package.',
      image : 'nodemon.png',
      keywords: ['npm', 'package', 'utility'],
      link: 'https://www.npmjs.com/package/package1'
    },
    {
      title: 'Concurrently',
      description: 'Another description of your package.',
      image : 'concurrently.gif',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://www.npmjs.com/package/concurrently'
    },
    {
      title: 'Husky',
      description: 'To write git hooks, such as precomit to check message and mismatch of environment files.',
      image : 'husky.png',
      keywords: ['npm', 'module', 'tool'],
      link: 'https://typicode.github.io/husky/'
    },
    // Add as many packages as you need...
  ];

  projects: Project[] = [
    {
      title: 'GVTkart',
      description: 'A description of your project.',
      image: 'gvtkart.webp',
      link: 'https://play.google.com/store/apps/details?id=com.gvtkart.gvt_kart'
    },
    {
      title: 'Subween ',
      description: 'Another description of your project.',
      image: 'subween.png',
      link: 'https://subween.com/'
    },
    {
      title: 'Approx Object',
      description: 'Another description of your project.',
      image: 'npm.png',
      link: 'https://www.npmjs.com/package/aproxobject'
    },
    {
        title : 'Food Booking App',
        description : 'Food Booking App',
        image : 'food_booking.jpeg',
        link : 'food.subween.com'
    }
    
    // Add as many projects as you need...
  ];

  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;

  playSound() {
    this.isUserInteraction = true;
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.play();
  }

  @ViewChild('term', {static: false}) child !: NgTerminal;
  prompt = `\n\n\n\n
  \n\n\n\n\n\nHello, I'm Manoj Mulakala, Journeying through the world of web development, I've discovered a powerful alliance in Express and MySQL, tackling challenges and creating impactful solutions. Angular isn't just another framework to me; it's a reliable companion that enables me to craft interactive and user-friendly web experiences. As a MEAN stack aficionado, I'm here to turn ideas into digital realities.`;
  ngAfterViewInit(){

    let i = 0;
    setInterval(()=>{
      if(i < this.prompt.length)
      {
        this.child.write(this.prompt[i]);
        i++;
        this.playSound();
      }
      
    }, 20)
    this.child.onData().subscribe((input) => {
        console.log(input)
        // this.child.write(input);
    });
  }
}
