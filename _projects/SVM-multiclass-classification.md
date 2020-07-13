---
title: Training SVMs on long sequences
position: 50
selected: true
languages: Python
tags: NLP
description: Training SVMs on long sequences
image: SVM.png
view_url: https://colab.research.google.com/drive/1mhzs8dNJ3HkCygkA1KNORpCJAeL3cEUD#scrollTo=1rSoTkU7mxBB
call_to_action: View on Colab
---

How do you classify long sequences into multiple classes? Naive Bag of Words models cannot do semantic modelling - synonyms are treated as separate words. Also, the document vectors they output balloon in size very quickly. I use TF-IDF and word2vec together to arrive at rich document vectors that can be classified by SVMs. [View on Colab](https://colab.research.google.com/drive/1mhzs8dNJ3HkCygkA1KNORpCJAeL3cEUD#scrollTo=1rSoTkU7mxBB) 