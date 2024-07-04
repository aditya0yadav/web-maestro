# from .models import Comment
from django.shortcuts import get_object_or_404
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from scipy.special import softmax

""" testing the model with the help of the following code """
# Comment = ["you are a good person", "I hate you", "I love you", "I am neutral"]


def get_comment_content():
    """
    Retrieve all comments content from the Comment model.
    """
    comments = Comment.objects.all()
    content = [comment.content for comment in comments]
    return content

def analyze_sentiment(text, tokenizer, model):
    """
    Analyze the sentiment of a given text using the provided tokenizer and model.
    """
    encoded_text = tokenizer(text, return_tensors="pt")
    output = model(**encoded_text)
    scores = output.logits[0].detach().numpy()
    scores = softmax(scores)
    score_dict = {"negative": scores[0], "neutral": scores[1], "positive": scores[2]}
    return score_dict

def main():
    """
    Main function to execute the sentiment analysis on all comments.
    """
    model_name = "cardiffnlp/twitter-roberta-base-sentiment"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSequenceClassification.from_pretrained(model_name)

    try:
        data = get_comment_content()
        analysis_results = [analyze_sentiment(text, tokenizer, model) for text in data]
        return analysis_results
    except Exception as e:
        print(f"An error occurred: {e}")
        return {}

if __name__ == "__main__":
    results = main()
    print(results)


