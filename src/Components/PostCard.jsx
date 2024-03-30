import { upvoteicon } from "../assets/Icons";

const PostCard = ({ imgURL, title, message, upvote, username }) => {
  return (
    <div>
      <em className="text-md text-slate-gray font-semibold">{username}</em>
      <div className="flex flex-row mb-10">
        <div>
          <img
            src={imgURL}
            alt="post image"
            className="rounded-md object-contain w-[300px] h-[200px] black-shad mr-10"
          />
        </div>

        <div className="flex flex-col w-[60%] h-full">
          <h3 className="mt-1 font-palanquin text-xl font-semibold">{title}</h3>
          <p className="mt-6 max-w-md info-text">{message}</p>
          <div className="mt-3 flex gap-2.5 justify-end">
            <img
              src={upvoteicon}
              width={24}
              height={24}
              alt="upvoting icon"
              className="object-contain m-0"
            />
            <p className="text-xl text-slate-gray">({upvote})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
