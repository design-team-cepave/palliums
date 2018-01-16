<template lang="pug">
  transition(name="modal")
    .modal-mask
      .modal-wrapper
        .modal-container

          .modal-header
            slot(name="header") default header

          .modal-body
            slot(name="body") default body

          .modal-footer
            slot(name="footer") default footer
              button.modal-default-button(@click="$emit('close')") OK
</template>

<script>
</script>