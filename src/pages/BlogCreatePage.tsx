import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import AuthHeader from "@/components/AuthHeader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function BlogCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      toast({
        title: "Authentication required",
        description: "You need to log in to create a blog post.",
        variant: "destructive",
      });
    }
  }, [user, loading, navigate]);

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      // First try to get the profile
      let { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .maybeSingle();

      // If no profile exists, create one
      if (!profile) {
        const { data: newProfile, error: createError } = await supabase
          .from("profiles")
          .insert([
            {
              id: user.id,
              username: user.email?.split('@')[0] || 'anonymous',
              avatar_url: null
            }
          ])
          .select()
          .single();

        if (createError) throw createError;
        profile = newProfile;
      }

      if (profileError) throw profileError;

      const { error } = await supabase.from("blogs").insert([
        {
          title,
          content,
          user_id: user.id,
        },
      ]);

      if (error) throw error;
      navigate("/blog");
    } catch (error) {
      console.error("Error creating blog:", error);
      setError("Failed to create blog. Please try again.");
    }
  };

  // Show loading state or redirect if not authenticated
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return null; // The useEffect will redirect
  }

  return (
    <>
      <AuthHeader />
      <div className="max-w-xl mx-auto py-10 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Write a Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateBlog} className="space-y-5">
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
    </>
  );
}
