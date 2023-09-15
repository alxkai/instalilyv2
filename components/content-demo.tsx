'use client'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

export default function ContentDemo() {
  const [isOpen, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videos] = useState([
    {
      title: '01. Product Innovation Example: CrossFit',
      description: 'CrossFit with the Google Chrome side panel allows for radically faster outcome',
      url: '/videos/demo/demo01.mp4',
      date: '09/05/2023',
    },
    {
      title: '02. Productivity Gains example: Kendra Scott',
      description: 'AI agent powered campaigns with Kendra Scott can save time and reduce errors​',
      url: '/videos/demo/demo02.mp4',
      date: '09/05/2023',
    },
    {
      title: '03. Product Innovation Example: Fast Growing Trees',
      description: 'End-to-end accelerated user journey flow powered by AI​',
      url: '/videos/demo/demo03.mp4',
      date: '09/05/2023',
    },
    {
      title: '04. Competitive Shift Example: Fast Growing Trees',
      description: '​Using generative AI agents for content discovery and reasoning​',
      url: '/videos/demo/demo04.mp4',
      date: '09/06/2023',
    },
    {
      title: '05. Productivity Gains: Partstown',
      description: ' Streamlined diagnosing and purchase experience',
      url: '/videos/demo/demo05.mp4',
      date: '09/06/2023',
    },
    {
      title: '06. Product Innovation: Partstown',
      description: 'Accelerating and deepening technician instructional retrieval',
      url: '/videos/demo/demo06.mp4',
      date: '09/06/2023',
    },
    {
      title: '07. AI Shopping Assistant: Saatva',
      description: 'Reduce time to purchase and increase conversion rate',
      url: '/videos/demo/demo07.mp4',
      date: '09/08/2023',
    },
    {
      title: '08. AI Customer Support Assistant',
      description: 'Enhanced customer service and frictionless consumer journey',
      url: '/videos/demo/demo08.mp4',
      date: '09/08/2023',
    },
  ]);

  const openModal = (url: string) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setOpen(false);
  };

  return (
    <section className="bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <h3 className="h3 mb-8 pt-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-career]">
            Watch Demo Reels
            <br />
            <span className="flex justify-between items-center text-xl font-bold text-gray-500 transition duration-150 pt-2 ease-in-out">
              View past product video demos
            </span>
          </h3>

          <div className="-my-3" data-aos-id-career>
            {videos.map((video, index) => (
              <div key={index} className="py-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-career]">
                <div className="pb-6 border-b border-gray-800">
                  <div className="mb-2">
                    <a
                      className="flex justify-between items-center text-xl font-bold text-[#181818] hover:text-[#FF00FF] transition duration-150 ease-in-out"
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(video.url);
                      }}
                    >
                      <span>{video.title}</span>
                      <svg
                        className="stroke-current shrink-0 ml-2"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g strokeWidth="2" fill="none">
                          <path d="M1 12h20" />
                          <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="text-[14px] text-gray-500 mb-3">
                    {video.description}
                  </div>
                  <div className="text-gray-400 flex flex-wrap items-center">
                    <div className="inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="ml-2 text-sm text-gray-500">{video.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        onClose={closeModal}
      >
        <iframe
          title="Video Demo"
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        />
      </ModalVideo>
    </section>
  );
}
