import { BookOpen, Heart, Users, GraduationCap, Utensils, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description:
        "Providing quality education, scholarships, and learning resources to children from underprivileged backgrounds.",
      color: "from-blue-500 to-blue-600",
      beneficiaries: "5,000+",
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description:
        "Free medical camps, health checkups, and access to essential healthcare services for rural communities.",
      color: "from-red-500 to-red-600",
      beneficiaries: "3,000+",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description:
        "Skill development programs and vocational training to empower women for financial independence.",
      color: "from-purple-500 to-purple-600",
      beneficiaries: "2,000+",
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description:
        "Daily meal programs for children and elderly, ensuring no one goes to bed hungry in our communities.",
      color: "from-green-500 to-green-600",
      beneficiaries: "4,000+",
    },
    {
      icon: Home,
      title: "Shelter & Housing",
      description:
        "Building safe homes and providing shelter for homeless families and disaster-affected communities.",
      color: "from-yellow-500 to-yellow-600",
      beneficiaries: "1,500+",
    },
    {
      icon: BookOpen,
      title: "Digital Literacy",
      description:
        "Bridging the digital divide with computer education and internet access for rural youth.",
      color: "from-indigo-500 to-indigo-600",
      beneficiaries: "2,500+",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-3 animate-fade-in-up">
            Our Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            How We Create Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
            Our comprehensive programs address the most pressing needs of communities,
            creating sustainable change that lasts for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className={`hover-elevate border-2 overflow-hidden animate-fade-in-up delay-${
                  (index + 3) * 100
                }`}
                data-testid={`card-program-${program.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-orange-500">
                        {program.beneficiaries}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Beneficiaries</p>
                    </div>
                    <Link href="/programs">
                      <Button
                        variant="ghost"
                        className="text-orange-500 hover:text-orange-600"
                        data-testid={`button-learn-${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-900">
          <Link href="/programs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8"
              data-testid="button-view-all-programs"
            >
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
