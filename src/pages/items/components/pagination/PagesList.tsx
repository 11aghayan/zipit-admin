import { useNavigate, useSearchParams } from "react-router-dom";
import PageButton from "./PageButton";

type Props = {
  pages: number;
}

const PagesList = ({ pages }: Props) => {
  const [sp, setSp] = useSearchParams();
  const page = Number(sp.get('page') || 1);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(page, pages);
    if (page < pages) {
      setSp(prev => ({
        ...prev,
        page: String(page + 1)
      }));

      navigate(0);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setSp(prev => ({
        ...prev,
        page: String(page - 1)
      }));

      navigate(0);
    }
  };

  return (
    <section className="flex justify-center items-center gap-2 top-full mt-10">
      <PageButton
        handleClick={handlePrev}
        isActive={page > 1}
      >
        Prev
      </PageButton>
      <PageButton
        handleClick={handleNext}
        isActive={page < pages}
      >
        Next
      </PageButton>
    </section>
  );
};

export default PagesList;