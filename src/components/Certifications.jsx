import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATES } from '../constants/staticConstants';

const Certifications = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATES.map((cert, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/6'
            >
              <img
                src={cert.image}
                width={100}
                height={100}
                alt={cert.title}
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-5/6'
            >
              <h6 className='mb-2 font-semibold text-xl'>{cert.title}</h6>
              <p className='mb-4 text-neutral-400'>{cert.organisation}</p>
              {cert.issued.map((validity, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'
                >
                  {validity}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
