import { Counter } from "@/components/counter";
import { Description } from "@/components/description";
import { Expression, ExpressionCard } from "@/components/expression";
import { PageMetaHeader } from "@/components/page-meta-header";
import { PageTitle } from "@/components/page-title";
import { QuestionCard } from "@/components/question-card";
import { Title } from "@/components/title";
import { VariableCard } from "@/components/variable-card";
import { VisualCard } from "@/components/visual-card";


export default function Home() {
  const questions = [
    {
      id: 1,
      question: "Which of the following terms are 'Like Terms'?",
      options: [
        { id: 1, label: "3x and 4y", isCorrect: false },
        { id: 2, label: "5x and 5", isCorrect: false },
        { id: 3, label: "2x and 7x", isCorrect: true },
        {
          id: 4,
          label: (
            <>
              x and x<sup>2</sup>
            </>
          ),
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which is a prime number?",
      options: [
        { id: 1, label: "8", isCorrect: false },
        { id: 2, label: "13", isCorrect: true },
        { id: 3, label: "21", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 space-y-4 my-5">
      <Title as="h6">Gemini</Title>
      <PageMetaHeader chapter={6} grade="Grade 6–8 Math" />
      <PageTitle
        title="Algebraic Expressions"
        subtitle="Variables are just placeholders for numbers."
      />
      <Description>
        An algebraic expression is made up of <strong>terms.</strong>
      </Description>
      <Description>
        In math, we call this <strong>{`"Combining Like Terms".`}</strong>
      </Description>
      <VisualCard>
        <div className="md:flex items-start justify-center gap-28 mb-8 text-center">
        <VariableCard
          icon={<span className="text-[56px] mb-3">🍎</span>}
          title={"Variable 'a' (Apples)"}
        >
          <Counter initialValue={2} min={0} max={10} />
        </VariableCard>
        <VariableCard
          icon={<span className="text-[56px] mb-3">🍌</span>}
          title={"Variable 'b' (Bananas)"}
        >
          <Counter initialValue={2} min={0} max={10} />
        </VariableCard>
        </div>
        <ExpressionCard className="my-10">
          <Title
            as="h4"
            className="mb-4 text-xs tracking-widest"
            textColor="text-slate-300"
          >
            THE ALGEBRAIC EXPRESSION
          </Title>

          <Expression
            terms={[
              { value: "2a", color: "text-red-400" },
              { value: "3b", color: "text-yellow-300" },
            ]}
          />

          <Description className="text-slate-400 mt-6 text-sm">
            {`Notice: You cannot combine them into "5ab" because they are different fruits (variables)!`}
          </Description>
        </ExpressionCard>
      </VisualCard>

      <div className="space-y-6">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q.question} options={q.options} />
        ))}
      </div>
    </div>
  );
}
