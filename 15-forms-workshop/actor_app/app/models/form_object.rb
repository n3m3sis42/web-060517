class FormObject
  attr_reader :object
  def initialize(activerecord_instance)
    @object = activerecord_instance
  end

  def my_text_field(name_attribute)
    model_name = self.object.class.to_s.downcase
    # function will break on the line below if the method defined by name_attribute does not exist for the class associated with self.object
    # could also do self.object.class.methods.include? and raise error/return error message if it doesn't return true
    html = <<-HTML
      <input type="text" name="#{model_name}[#{name_attribute}]" id="#{model_name}_#{name_attribute}" value="#{self.object.send(name_attribute)}">
    HTML
    html.html_safe
  end
end

# def form_for(activerecord_instance)
  # yield FormBuilder.new(activerecord_instance)
# end
# f = FormObject.new(@actor)
# f.text_field :name
# <input type="text" name="#{name_attribute}">
