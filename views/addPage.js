const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
      <input id="name" name="name" type="text" class="form-control"/>
    </div>
  </div>
    
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">Author Email</label>
    <div class="col-sm-10">
      <input id="email" name="email" type="text" class="form-control"/>
    </div>
  </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="textarea" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
      <textarea name = 'content' rows = "10" cols = "128"></textarea>
      </div>
    </div>
    
    <div>
      <p><strong>Page Status</strong></p>
      <input type="radio" id="status"
        name="status" value="open">
      <label for="open">Open</label>

      <input type="radio" id="closedStatus"
        name="status" value="closed">
      <label for="closed">Closed</label>
    </div>
    
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>





`);
