---
---

// Get post data at compile time
const data = `[
    {% for post in site.posts %}
        {
            "title": "{{ post.title }}",
            "link": "{{ post.url }}",
            "author": "{{ post.author }}", 
            "date":"{{ post.date }}",
            "tags": [{% for tag in post.tags %}"{{ tag }}"{% if forloop.last == false %}, {% endif %}{% endfor %}]
        }{% if forloop.last == false %}, {% endif %}
    {% endfor %}
]`;

// Get URL param
const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");

if (tag.length) {
    // Filter data
    const jsonData = JSON.parse(data);
    const filtered = jsonData.filter(obj => obj.tags.includes(tag));
    console.log(filtered);

    // DOM manipulation
    const tagRoot = document.querySelector("#tagroot");
    const title = document.createElement("h1");
    title.innerHTML = `#${tag}`
    const list = document.createElement("li");
    tagRoot.appendChild(title);
    
    filtered.map(post=>{
        console.log(post)
        const anchor = document.createElement("a");
        anchor.href = post.link;
        anchor.innerHTML = post.title;
        list.appendChild(anchor);
    });

    tagRoot.appendChild(list);

} 
