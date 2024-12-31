import Image from 'next/image';
import Card from '@/app/ui/card';
import profilePic from '../public/chris.webp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import Button from '@/app/ui/button';
import Navbar from '@/app/ui/navbar';
import { socials, serviceList } from '@/app/data/data';
import TimeCard from './ui/timecard';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen gap-4 items-center justify-center">
      <Navbar />
      <main className="container border flex flex-col md:grid xl:grid-cols-4 grid-rows-12 gap-4 max-w-7xl max-h-[950px] bg-dark p-4">
        {/* Intro Card */}
        <Card className="col-span-1 xl:col-span-3 row-span-5">
          <div className="flex">
            <div className="flex flex-col lg:p-4 justify-between">
              <div>
                <h1 className="w-full text-brand md:text-xl mb-4">
                  {'\u{1F44B}\u{1F3ff}'} Hi I&apos;m Chris Koranteng
                </h1>
                <p className="font-semibold">
                  Full-Stack Developer | DevOps Engineer | Problem Solver
                </p>
                <p className="my-3 lg:mt-8">
                  I specialize in building robust, scalable systems and
                  innovative software solutions that drive real impact. Whether
                  it&apos;s cloud infrastructure, full-stack applications, or
                  optimizing workflows, I bring a unique blend of engineering
                  expertise and strategic thinking to the table.
                </p>
              </div>
              <div className="w-full flex items-center justify-between my-2 md:justify-start md:gap-12">
                <Button
                  href={'/'}
                  icon={<i className="bi bi-telephone-fill text-sm"></i>}
                  iconPosition={'left'}
                  className="w-full md:w-auto border border-green-600 py-1 px-3"
                >
                  Book A Call
                </Button>
                <Button
                  href={'/projects'}
                  icon={<i className="bi bi-arrow-right"></i>}
                  iconPosition={'right'}
                  className="hidden md:block border border-green-600 py-3 md:py-3 lg:py-2"
                >
                  Explore My Work
                </Button>
              </div>
            </div>
            <Image
              className="hidden md:block rounded-full"
              src={profilePic}
              width={200}
              height={200}
              alt={'Photo of Christian Koranteng'}
            />
          </div>
        </Card>
        {/* About Card  */}
        <Card className="col-span-1 row-span-5">
          <h1 className="text-brand font-bold lg:text-xl">🧑‍💻 A Bit About Me</h1>
          <p>
            I’m Chris, a DevOps and Full-Stack Engineer who loves crafting
            smart, scalable solutions. From building cloud infrastructure to
            creating seamless web applications, I thrive on solving tough
            challenges with the right tools and technologies. When I’m not
            coding, you’ll find me exploring leadership, volunteering, or diving
            into an epic fantasy novel.
          </p>

          <Link
            href={'/about'}
            className="hover:bg-green-700 hover:text-white border text-brand border-brand p-2 flex items-center justify-center gap-4 transition-all ease-in-out duration-300"
          >
            Read More
            <i className="bi bi-arrow-right"></i>
          </Link>
        </Card>
        {/* Contact Card */}
        <Card className="col-span-1 row-span-7">
          <h1 className="text-brand mt-4 font-bold">
            Let&apos;s Work Together
          </h1>
          <div className="mb-4">
            <h2 className="mt-2">Contact Details</h2>
            <span>
              <Link href={'/about'} className="flex items-center gap-2 mt-4">
                <i className="bi bi-envelope text-brand text-lg"></i>
                <span className="text-brand">devwithchris@gmail.com</span>
              </Link>
            </span>
          </div>
          <div className="mt-8">
            <h2 className="mt-2 text-sm">Socials</h2>
            <ul>
              {socials.map((link, index) => (
                <li
                  className="flex gap-4 items-center text-brand my-8 text-lg"
                  key={index}
                >
                  <span>
                    <i className={`bi bi-${link.name.toLowerCase()}`}></i>
                  </span>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        {/* Services Card */}
        <Card className="xl:col-span-2 row-span-4">
          <h1 className="text-sm lg:text-center">
            🚀 How I Can Help Your Business
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {serviceList.map((service, index) => (
              <div
                key={index}
                className="border border-green-600 rounded-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 bg-woodsmoke-950"
              >
                <i
                  className={`${service.icon} text-4xl mb-2 text-green-500`}
                ></i>
                <h6 className="font-semibold text-brand-500 text-lg">
                  {service.title}
                </h6>
                <p className="text-woodsmoke-100 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
        {/* Now Card */}
        <Card className="row-span-3">
          <h1 className="text-brand font-semibold">🛠️ What Am I Up To?</h1>
          <p className="text-sm">
            Currently, I’m working as a DevOps Engineer at
            <Link
              className="mx-1 text-brand"
              href={'https://www.reallygreattech.com'}
            >
              Really Great Tech
            </Link>
            , where I’m building scalable infrastructure and optimizing cloud
            deployments.
          </p>
          <Button
            href={'/now'}
            icon={<i className="bi bi-arrow-right"></i>}
            iconPosition={'right'}
            className="mt-auto"
          >
            See My Latest
          </Button>
        </Card>
        {/* Projects Card */}
        <Card className="row-span-3">
          <h1 className="text-brand">📂 My Work</h1>
          <p>
            Explore a collection of projects where I’ve delivered clean code,
            efficient systems, and innovative solutions.
          </p>
          <Button
            icon={<i className="bi bi-arrow-right"></i>}
            iconPosition={'right'}
            href={'/projects'}
          >
            View Portfolio
          </Button>
        </Card>
        {/* Blog Card */}
        <Card className="row-span-3">
          <h1 className="text-brand">📝 Insights & Ideas</h1>
          <p>
            Check out my thoughts on engineering, leadership, and the
            ever-evolving world of tech.
          </p>
          <Button
            className="flex gap-4 items-center justify-center md:mt-auto"
            icon={<i className="bi bi-arrow-right"></i>}
            iconPosition={'right'}
            href={'/blog'}
          >
            Read the Blog
          </Button>
        </Card>
        {/* Time Card */}
        <Card className="row-span-3 flex items-center justify-center">
          <TimeCard />
        </Card>
        {/* Footer Card */}
        <Card>
          <p>
            <span className="text-brand mr-2">
              &copy;{new Date().getFullYear()}
            </span>
            Made with 💚 using <span className="text-brand">Next.js</span> |
            Built by Christian Koranteng
          </p>
        </Card>
      </main>
    </div>
  );
}
