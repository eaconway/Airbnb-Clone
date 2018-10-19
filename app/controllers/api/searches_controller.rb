class Api::SearchesController < ApplicationController
  def index
    id = params[:authorId]
    @searches = Search.where(author_id: id).where.not(query: "")
      .order(created_at: :desc).limit(6)
    render :index
  end

  def create
    @search = Search.new(search_params)
    query = params[:search][:query]

    if params[:search][:query] == ""
      @homes = Home.all
    else
      @homes = Home.where("city like ?", "%o%")
    end

    if @search.save!
      render :show
    else
      render json: @homes.errors.full_messages, status: 422
    end
  end

  def show
    @search = Search.find(params[:id])
    if @search.query == ""
      @homes = Home.all
    else
      @homes = Home.where(city: @search.query)
    end
  end

  private

  def search_params
    params.require(:search).permit(:query, :author_id, :updated_at)
  end
end
