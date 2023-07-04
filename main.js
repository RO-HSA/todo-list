const addFromModal = document.getElementById('modal-add');
const cancelFromModal = document.getElementById('modal-cancel');
const modalContent = document.getElementById('entry-content');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const content = document.getElementById('todo-content');

let entry = '';

addFromModal.addEventListener('click', function(e) {

    if (modalContent.value === '') {
        e.preventDefault();
    } else {
        entry += `<div class="ballon">
                <div class="content">
                    <p>
                        ${modalContent.value}
                    </p>
                    <time>02/07/2023, 12:00</time>
                </div>
            </div>`;
        content.innerHTML = entry;
        modal.style.display = 'none';
        overlay.style.visibility = 'hidden';
    }

    modalContent.value = '';
})

cancelFromModal.addEventListener('click', function() {
    modal.style.display = 'none';
    overlay.style.visibility = 'hidden';
})

addButton.addEventListener('click', function() {
    modal.style.display = 'flex';
    overlay.style.visibility = 'visible';
})

deleteButton.addEventListener('click', function() {
    entry = '';
    content.innerHTML = entry;
})