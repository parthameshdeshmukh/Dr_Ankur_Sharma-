import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import VideoModal from './components/VideoModal';
import CaseStudyModal from './components/CaseStudyModal';
import ToastNotification from './components/ToastNotification';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            openBookingModal={() => setIsBookingOpen(true)}
            openVideoModal={() => setIsVideoOpen(true)}
            setSelectedCaseStudy={(caseItem) => setSelectedCaseStudy(caseItem)}
            setSelectedService={(srv) => setSelectedService(srv)}
            setSelectedBlogPost={(post) => setSelectedBlogPost(post)}
          />
        );
      case 'about':
        return (
          <AboutPage
            setActiveTab={setActiveTab}
            openBookingModal={() => setIsBookingOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setActiveTab={setActiveTab}
            setSelectedService={(srv) => setSelectedService(srv)}
            openBookingModal={() => setIsBookingOpen(true)}
            openVideoModal={() => setIsVideoOpen(true)}
          />
        );
      case 'service-detail':
        return (
          <ServiceDetailPage
            service={selectedService}
            setActiveTab={setActiveTab}
            setSelectedCaseStudy={(caseItem) => setSelectedCaseStudy(caseItem)}
            openBookingModal={() => setIsBookingOpen(true)}
          />
        );
      case 'case-studies':
        return (
          <CaseStudiesPage
            setActiveTab={setActiveTab}
            setSelectedCaseStudy={(caseItem) => setSelectedCaseStudy(caseItem)}
            openBookingModal={() => setIsBookingOpen(true)}
          />
        );
      case 'blog':
        return (
          <BlogPage
            setActiveTab={setActiveTab}
            setSelectedBlogPost={(post) => setSelectedBlogPost(post)}
          />
        );
      case 'blog-detail':
        return (
          <BlogDetailPage
            post={selectedBlogPost}
            setActiveTab={setActiveTab}
            setSelectedBlogPost={(post) => setSelectedBlogPost(post)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            setActiveTab={setActiveTab}
            openBookingModal={() => setIsBookingOpen(true)}
            showToast={showToast}
          />
        );
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            openBookingModal={() => setIsBookingOpen(true)}
            openVideoModal={() => setIsVideoOpen(true)}
            setSelectedCaseStudy={(caseItem) => setSelectedCaseStudy(caseItem)}
            setSelectedService={(srv) => setSelectedService(srv)}
            setSelectedBlogPost={(post) => setSelectedBlogPost(post)}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
      {/* Shared Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openBookingModal={() => setIsBookingOpen(true)}
      />

      {/* Main Dynamic View */}
      <main style={{ flex: 1 }}>
        {renderActivePage()}
      </main>

      {/* Shared Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openBookingModal={() => setIsBookingOpen(true)}
        showToast={showToast}
      />

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        showToast={showToast}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <CaseStudyModal
        caseItem={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        openBookingModal={() => setIsBookingOpen(true)}
      />

      {/* Floating Toast Notification */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
