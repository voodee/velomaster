Spree::FrontendHelper.module_eval do

  def taxons_tree(root_taxon, current_taxon, max_level = 1)
    return '' if max_level < 1 || root_taxon.leaf?
    content_tag :ul, class: 'list-group' do
      root_taxon.children.map do |taxon|
        css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'list-group-item active' : 'list-group-item'

        content_tag :li, class: css_class do
          link_to(taxon.name, seo_url(taxon)) + taxons_tree(taxon, current_taxon, max_level - 1)
        end


      end.join("\n").html_safe
    end
  end


  def link_to_cart(text = nil)

    # text = text ? h(text) : Spree.t('cart')
    # css_class = nil
    #
    # if simple_current_order.nil? or simple_current_order.item_count.zero?
    #   text = "<span class='glyphicon glyphicon-shopping-cart'></span> #{text}: (#{Spree.t('empty')})"
    #   css_class = 'empty'
    # else
    #   text = "<span class='glyphicon glyphicon-shopping-cart'></span> #{text}: (#{simple_current_order.item_count})  <span class='amount'>#{simple_current_order.display_total.to_html}</span>"
    #   css_class = 'full'
    # end
    #
    # link_to text.html_safe, spree.cart_path, :class => "cart-info #{css_class}"

    link_to spree.cart_path, :class => "header-cart--link" do
      if simple_current_order.nil? or simple_current_order.item_count.zero?
        content_tag :span, class: 'header-cart--num' do
          simple_current_order.item_count
        end
      end

      content_tag :span, class: 'header-cart--desc' do
        if simple_current_order.nil? or simple_current_order.item_count.zero?
          simple_current_order.display_total.to_html
        else
          Spree.t('empty')
        end
      end

    end
  end
end