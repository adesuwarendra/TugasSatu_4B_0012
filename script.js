const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){

    if(inputValue.value === ""){
        alert("Input tidak boleh kosong")
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("btn-hapus");
    btnHapus.addEventListener("click", function() {
    daftarTugas.removeChild(listbaru);
    });

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("btn-edit");
    btnEdit.addEventListener("click", function() {
        const isiBaru = prompt("Edit Tugas:", span.innerHTML);

        if (isiBaru !== null && isiBaru.trim() !== "") {
        span.innerHTML = isiBaru;
    }
    });

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);
    listbaru.appendChild(btnHapus);
    listbaru.appendChild(btnEdit);

    inputValue.value ="";
    inputValue.focus();

});


