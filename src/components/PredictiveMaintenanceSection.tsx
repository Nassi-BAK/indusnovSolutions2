import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PredictiveMaintenanceSection = () => {
  const features = [
    'Advanced Condition Monitoring',
    'Industrial IoT Integration',
    'Intelligent Inspections',
    'Data-Driven Engineering',
    'Continuous Asset Monitoring',
    'Strategic Performance Management'
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Predictive Maintenance & Industry 4.0
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Indusnov Solutions, predictive maintenance is at the core of everything we do. We combine advanced condition monitoring, industrial IoT, intelligent inspections, and data-driven engineering to help industries anticipate failures before they occur.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By integrating multiple Industry 4.0 technologies into a unified approach, we enable continuous asset monitoring, improved reliability, and safer, more efficient operations, transforming maintenance from reactive intervention into strategic performance management.
            </p>

            {/* CTA Button */}
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              Explore Our Solutions
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg border border-orange-200/50 hover:border-orange-300 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-semibold">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceSection;
