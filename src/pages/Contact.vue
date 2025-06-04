<script setup>
import { ref, reactive } from 'vue';
import { useMotion } from '@vueuse/motion';
import { Icon } from '@iconify/vue';

const pageRef = ref(null);
const formRef = ref(null);
const infoRef = ref(null);

// Set up animations
useMotion(pageRef, {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500
    }
  }
});

useMotion(formRef, {
  initial: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500,
      delay: 200
    }
  },
  visibleOnce: true,
});

useMotion(infoRef, {
  initial: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500,
      delay: 300
    }
  },
  visibleOnce: true,
});

// Form handling
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formSubmitted = ref(false);
const isSubmitting = ref(false);

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.subject = '';
  errors.message = '';
  
  // Validate name
  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }
  
  // Validate email
  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  }
  
  // Validate subject
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }
  
  // Validate message
  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    isSubmitting.value = true;
    
    // Simulate form submission
    setTimeout(() => {
      formSubmitted.value = true;
      isSubmitting.value = false;
      
      // Reset form
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
    }, 1500);
  }
};

const resetForm = () => {
  formSubmitted.value = false;
};

const contactInfo = [
  { icon: 'mdi:email', title: 'Email', value: 'dafrimulya78@gmail.com', link: 'mailto:dafrimulya78@gmail.com' },
  { icon: 'mdi:phone', title: 'Phone', value: '081234567890', link: 'tel:+11234567890' },
  { icon: 'mdi:map-marker', title: 'Location', value: 'Riau, Indonesia', link: 'https://maps.app.goo.gl/xtXEhWwKh4zWPSxc6' }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/dafri91', icon: 'mdi:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'mdi:twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/d4fri_/', icon: 'mdi:instagram' }
];

</script>

<template>
  <div ref="pageRef">
    <!-- Page Header -->
    <!-- <section class="bg-primary-50 dark:bg-gray-800 py-20">
      <div class="container-custom text-center">
        <h1 class="mb-4">Contact Me</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to get in touch with me.
        </p>
      </div>
    </section> -->
    
    <!-- Contact Content -->
    <section class="section">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Contact Form -->
          <div ref="formRef" class="lg:col-span-7">
            <div class="card p-8">
              <h2 class="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              <!-- Success Message -->
              <div v-if="formSubmitted" class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                <h3 class="font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                <p>Thank you for contacting me. I'll get back to you as soon as possible.</p>
                <button 
                  @click="resetForm"
                  class="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
              
              <!-- Contact Form -->
              <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    :class="{ 'border-red-500 dark:border-red-500': errors.name }"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    :class="{ 'border-red-500 dark:border-red-500': errors.email }"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    :class="{ 'border-red-500 dark:border-red-500': errors.subject }"
                  />
                  <p v-if="errors.subject" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.subject }}</p>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    :class="{ 'border-red-500 dark:border-red-500': errors.message }"
                  ></textarea>
                  <p v-if="errors.message" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.message }}</p>
                </div>
                
                <button
                  type="submit"
                  class="btn-primary w-full"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </form>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div ref="infoRef" class="lg:col-span-5">
          <div class="card p-8 mb-8">
              <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div 
                  v-for="(info, index) in contactInfo" 
                  :key="index"
                  class="flex items-start"
                >
                  <Icon :icon="info.icon" class="text-primary-600 dark:text-primary-400 w-6 h-6 mr-4" />
                  <div>
                    <h3 class="font-semibold text-lg">{{ info.title }}</h3>
                    <a 
                      :href="info.link"
                      class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ info.value }}
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h3 class="font-semibold text-lg mb-4">Connect with me</h3>
                <div class="flex space-x-4">
                  <a 
                    v-for="link in socialLinks" 
                    :key="link.name"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
                    :aria-label="link.name"
                  >
                    <Icon :icon="link.icon" class="h-5 w-5" />
                  </a>
                </div>
              </div>
          </div>
            
            <!-- Map -->
            <div class="card p-8">
              <h2 class="text-2xl font-semibold mb-6">Location</h2>
              <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042534.4410961377!2d100.5996348958999!3d0.9009376221099414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e27575819b13e77%3A0x836f02946cb5bdb1!2sRiau!5e0!3m2!1sen!2sid!4v1749055077409!5m2!1sen!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>