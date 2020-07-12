---
title: Resnets and transfer learning
position: 50
selected: true
languages: Ruby
tags: Transfer Learning, Computer Vision
description: Resnets and transfer learning
image: dog-breeds.png
view_url: https://colab.research.google.com/drive/1mhzs8dNJ3HkCygkA1KNORpCJAeL3cEUD#scrollTo=1rSoTkU7mxBB
call_to_action: View on Colab
---

Pre-trained convnets have long been used as fixed feature extractors - detecting lines and curves and shapes in the image. This is better than starting from a clean (randomly initialized) network state, because we often don't have enough data to train our network. ResNets trained on the ImageNet database are a superb example of this idea in action. I demonstrate how we can achieve near human-expert level accuracy on a relatively small and difficult dataset of Dog breeds.