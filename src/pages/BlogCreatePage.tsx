
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Get the current session (so we have user id)
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      toast({
        title: "You must be logged in to post a blog.",
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("blogs").insert([
      {
        user_id: session.user.id,
        title,
        content,
      },
    ]);
    setSubmitting(false);
    if (error) {
      toast({
        title: "Error posting blog",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Your blog post has been published!",
      });
      navigate("/blog");
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Write a Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                minLength={4}
                maxLength={100}
                placeholder="e.g. My Hidden Gem Adventure"
                disabled={submitting}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Content</label>
              <Textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                required
                minLength={20}
                maxLength={2000}
                placeholder="Share your adventure, tips, or review here."
                rows={8}
                disabled={submitting}
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="bg-safari-700 hover:bg-safari-800 w-full"
            >
              {submitting ? "Posting..." : "Publish Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
