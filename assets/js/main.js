// scripts.js

document.addEventListener('DOMContentLoaded', function () {
   const content = document.getElementById('content');
   const gridViewBtn = document.getElementById('gridViewBtn');
   const listViewBtn = document.getElementById('listViewBtn');

   // Function to set the view
   function setView(view) {
      if (view === 'grid') {
         content.classList.add('grid');
         content.classList.remove('list');
      } else {
         content.classList.add('list');
         content.classList.remove('grid');
      }
   }

   // Check local storage for saved view preference
   const savedView = localStorage.getItem('view');
   if (savedView) {
      setView(savedView);
   }

   // Add event listeners to the buttons
   gridViewBtn.addEventListener('click', function () {
      setView('grid');
      localStorage.setItem('view', 'grid');
   });

   listViewBtn.addEventListener('click', function () {
      setView('list');
      localStorage.setItem('view', 'list');
   });
});
