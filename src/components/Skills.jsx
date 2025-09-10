import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaLinux,
  FaDocker,
  FaBitbucket,
  FaGithub,
} from 'react-icons/fa';
import { BiLogoTypescript, BiLogoGit } from 'react-icons/bi';
import {
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiServerless,
  SiKubernetes,
  SiRedhatopenshift,
  SiSubversion,
  SiSplunk,
  SiDynatrace,
  SiDatadog,
  SiJirasoftware,
  SiAmazoncloudwatch,
  SiAkamai,
  SiSelenium,
  SiPython,
  SiLangchain,
  SiGithubactions,
  SiGithubcopilot,
  SiClaude,
  SiOllama,
  SiGooglegemini,
} from 'react-icons/si';
import { TbBrandPowershell } from 'react-icons/tb';
import { DiJenkins, DiSqllite } from 'react-icons/di';
import { motion } from 'motion/react';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Skills = () => {
  return (
    <div className='bordee-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Skills
      </motion.h2>
      <motion.h6
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className='my-12 text-xl text-center text-neutral-500'
      >
        Technologies
      </motion.h6>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Java'
        >
          <FaJava className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='JavaScript'
        >
          <FaJs className='text-4xl text-yellow-200' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='NodeJs'
        >
          <FaNodeJs className='text-4xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='React Js'
        >
          <FaReact className='text-4xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='TypeScript'
        >
          <BiLogoTypescript className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Python'
        >
          <SiPython className='text-4xl text-yellow-200' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Spring MVC'
        >
          <SiSpring className='text-4xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Spring Boot'
        >
          <SiSpringboot className='text-4xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='HTML'
        >
          <FaHtml5 className='text-4xl text-red-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='CSS'
        >
          <FaCss3Alt className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Shell scripting'
        >
          <TbBrandPowershell className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='MySQL'
        >
          <SiMysql className='text-4xl text-blue-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Oracle DB'
        >
          <SiOracle className='text-4xl text-red-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='SQLite'
        >
          <DiSqllite className='text-4xl text-cyan-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Amazon Web Services'
        >
          <FaAws className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Serverless'
        >
          <SiServerless className='text-4xl text-red-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Linux'
        >
          <FaLinux className='text-4xl text-stone-300' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Docker'
        >
          <FaDocker className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Kubernetes'
        >
          <SiKubernetes className='text-4xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Openshift'
        >
          <SiRedhatopenshift className='text-4xl text-red-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Langchain'
        >
          <SiLangchain className='text-4xl text-green-600' />
        </motion.div>
      </motion.div>
      <motion.h6
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className='my-12 text-xl text-center text-neutral-500'
      >
        Tools
      </motion.h6>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Git'
        >
          <BiLogoGit className='text-4xl text-red-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='SVN'
        >
          <SiSubversion className='text-4xl text-cyan-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Github'
        >
          <FaGithub className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Github Actions'
        >
          <SiGithubactions className='text-4xl text-blue-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Splunk'
        >
          <SiSplunk className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Jenkins'
        >
          <DiJenkins className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Bitbucket'
        >
          <FaBitbucket className='text-4xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Dynatrace'
        >
          <SiDynatrace className='text-4xl text-green-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Datadog'
        >
          <SiDatadog className='text-4xl text-purple-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Jira'
        >
          <SiJirasoftware className='text-4xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Amazon Cloudwatch'
        >
          <SiAmazoncloudwatch className='text-4xl text-amber-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Akamai'
        >
          <SiAkamai className='text-4xl text-blue-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Selenium'
        >
          <SiSelenium className='text-4xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Github Copilot'
        >
          <SiGithubcopilot className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Claude'
        >
          <SiClaude className='text-4xl text-amber-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Ollama'
        >
          <SiOllama className='text-4xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
          title='Gemini CLI'
        >
          <SiGooglegemini className='text-4xl text-blue-500' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
