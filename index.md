{% capture my-include %}{% include README.md %}{% endcapture %}
{{ my-include | markdownify }}
