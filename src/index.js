import { Modal } from 'flowbite';

const $targetCreatePortfolioModel = document.getElementById('create-portfolio-model');

// options with default values
const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};

/*
* $targetCreatePortfolioModel: required
* options: optional
*/
const modal = new Modal($targetCreatePortfolioModel, options);

const openModalBtn = document.getElementById('create-portfolio-model-button');
const closeModalBtn = document.getElementById('close-create-portfolio-model');

// Function to open the modal
function openModal() {
    modal.show()
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    modal.hide()
    document.body.style.overflow = 'auto';
}

// Event listeners to open and close the modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
