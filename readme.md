## Setting up dev environment
1. Install ruby & dependencies
```sh
sudo apt-get update && sudo apt-get upgrade 
sudo apt-get install ruby-full
ruby -v
gem -v
```

2. Clone dev branch
```sh
git clone -b dev neavlingm:neavlingm/itsmeat-jekyll.git
cd itsmeat-jekyll
```

3. Install `jekyll` and `bundler`
```sh
sudo gem install jekyll bundler
```

4. Install dev dependencies
```sh
bundler install
```

5. Run dev server
```sh
bundler exec jekyll serve
```





