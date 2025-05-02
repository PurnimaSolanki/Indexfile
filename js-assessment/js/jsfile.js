const bookingType = document.getElementById('bookingType');
    const dateGroup = document.getElementById('dateGroup');
    const slotGroup = document.getElementById('slotGroup');
    const timeGroup = document.getElementById('timeGroup');
    const nameDiv = document.getElementById('nameDiv');
    const mobileDiv = document.getElementById('mobileDiv');
    const emailDiv = document.getElementById('emailDiv');
    const numPersonsDiv = document.getElementById('numPersonsDiv');

    bookingType.addEventListener('change', function () {
      const value = this.value;

      dateGroup.classList.add('hidden');
      slotGroup.classList.add('hidden');
      timeGroup.classList.add('hidden');
      nameDiv.classList.add('hidden');
      mobileDiv.classList.add('hidden');
      emailDiv.classList.add('hidden');
      numPersonsDiv.classList.add('hidden');

      if (value === 'full') {
        dateGroup.classList.remove('hidden');
      } else if (value === 'half') {
        dateGroup.classList.remove('hidden');
        slotGroup.classList.remove('hidden');
      } else if (value === 'hourly') {
        dateGroup.classList.remove('hidden');
        timeGroup.classList.remove('hidden');
      }
    });