// Projects.js
import ProjectCard from './ProjectCard';
import projects from './projectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css'; // Assuming you have a CSS file for custom styles
const Projects = () => {

  // const projects = [
  //   {
  //     title: 'Resolink',
  //     description:
  //       'Responsive web application to share and explore educational and development resources.',
  //     iframe: 'https://resolink.vercel.app/',
  //     tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  //     live: 'https://resolink.vercel.app/',
  //     code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
  //   },
  //   {
  //     title: 'SchedGuru',
  //     description:
  //       'Smart web app for managing faculty schedules and automating exam seating in academic institutions.',
  //     iframe: 'https://sched-guru.vercel.app/',
  //     tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  //     live: 'https://sched-guru.vercel.app/',
  //     code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
  //   },
  //   {
  //     title: 'Agri Advisor',
  //     description:
  //       'Java-based Android app integrating ML, Firebase, and weather APIs to deliver real-time, data-driven crop recommendations for farmers.',
  //     tech: ['Java', 'XML', 'Firebase', 'ML'],
  //     code: 'https://github.com/tej-mahender/Agri-Advisor',
  //   },
  //   {
  //     title: 'Lung Cancer',
  //     description:
  //       'ML model that predicts lung cancer using logistic regression, based on symptoms and lifestyle data, with 96.77% accuracy.',
  //     tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  //     code: 'https://github.com/tej-mahender/LungCancerDetection',
  //   },
  //   {
  //     title: 'Crop Recommendation & Yield Prediction',
  //     description:
  //       'Dual-model system that recommends crops and predicts yields based on soil and climate data.',
  //     tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  //     code: 'https://github.com/tej-mahender/LungCancerDetection',
  //   },
  // ];

  return (
    <section id="projects" className="p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
          Things I’ve Built
        </h2>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
                {/* Mobile: Swiper Carousel */}
        <div className="block relative md:hidden">
          <Swiper
            spaceBetween={16}
             slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.slug}>
                <div className="px-4"> {/* Padding for mobile */}
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Projects;
