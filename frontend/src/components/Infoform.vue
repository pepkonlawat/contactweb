<template>
  <div id="form-box" class="ui segment">
    <h2 class="ui header">
      Contact
      <a class="ui teal label">Add</a>
    </h2>
    <div class="ui divider"></div>
    <form class="ui form">
      <div class="field required">
        <label>Contact ID</label>
        <input type="text" name="contact-id" placeholder="Contact ID" />
      </div>
      <div class="field required">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div class="field required">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>
      <div class="field required">
        <label>Mobile No</label>
        <input type="text" name="mobile-no" placeholder="Mobile No" />
      </div>
      <div class="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" />
      </div>
      <div class="field">
        <label>Facebook</label>
        <input type="text" name="facebook" placeholder="Facebook" />
      </div>
      <div class="field">
        <label>Image Url</label>
        <input type="text" name="image-url" placeholder="Image Url" />
      </div>
      <div class="ui buttons">
        <button class="ui primary button">Save</button>
        <button class="ui button">Discard</button>
      </div>
    </form>
  </div>
</template>
<style scoperequiredd>
#form-box {
  width: 95%;
  margin: auto;
}
</style>
