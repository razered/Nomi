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

How do you classify long paragraphs of text into multiple classes? Naive Bag of Words (BoW) models have no way of modelling the meanings of words - synonyms are treated as separate words. Also, they become unusable as soon as the vocabulary passes a certain threshold. BoW can be augmented using TF-IDF vectors to identify which words are most representative of the document. Now the only thing remaining is incorporating semantics - for which we can trust word2vec. Click below to see how I put all of them together to achieve a decent accuracy.